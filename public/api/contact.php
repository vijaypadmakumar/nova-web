<?php
// Contact and "Build your plan" form handler for Hostinger (PHP runs on all plans).
// Sends the submission by email; nothing is stored on the server.
// Set TO_EMAIL and FROM_EMAIL to mailboxes on the novanode.com.au domain.

const TO_EMAIL = 'hello@novanode.com.au';
const FROM_EMAIL = 'website@novanode.com.au'; // must be a mailbox on your domain for SPF/DKIM to pass

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function reply(int $code, array $body): void {
    http_response_code($code);
    echo json_encode($body);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    reply(405, ['ok' => false, 'error' => 'Use the form on the website to send a message.']);
}

// Honeypot: real people never fill this in.
if (!empty($_POST['website'])) {
    reply(200, ['ok' => true]);
}

$clean = static function ($v, int $max = 2000): string {
    if (is_array($v)) {
        $v = implode(', ', array_map('strval', $v));
    }
    $v = trim(strip_tags((string) $v));
    $v = preg_replace("/[\r\n]+/", "\n", $v);
    return mb_substr($v, 0, $max);
};

$form = $clean($_POST['form'] ?? 'contact', 20) === 'plan' ? 'plan' : 'contact';
$name = $clean($_POST['name'] ?? '', 120);
$replyTo = $clean($_POST['reply_to'] ?? '', 160);

if ($name === '' || $replyTo === '') {
    reply(422, ['ok' => false, 'error' => 'Add your name and an email or phone number so we can reply.']);
}

$fields = [
    'Name' => $name,
    'Business' => $clean($_POST['business'] ?? '', 160),
    'Email or phone' => $replyTo,
];
if ($form === 'contact') {
    $fields['Message'] = $clean($_POST['message'] ?? '');
} else {
    $fields += [
        'Business type' => $clean($_POST['business_type'] ?? '', 60),
        'Business (other)' => $clean($_POST['business_other'] ?? '', 200),
        'Industry features' => $clean($_POST['features'] ?? []),
        'Add-ons' => $clean($_POST['addons'] ?? []),
        'Request: problem' => $clean($_POST['request_problem'] ?? ''),
        'Request: who uses it' => $clean($_POST['request_who'] ?? '', 200),
        'Request: how often' => $clean($_POST['request_often'] ?? '', 200),
        'Request: example' => $clean($_POST['request_example'] ?? '', 500),
        'Request: needed by' => $clean($_POST['request_when'] ?? '', 200),
        'Current website' => $clean($_POST['current_site'] ?? '', 300),
    ];
}

$lines = [];
foreach ($fields as $label => $value) {
    if ($value !== '') {
        $lines[] = $label . ":\n" . $value . "\n";
    }
}
$body = implode("\n", $lines) . "\n--\nSent from the novanode.com.au " . $form . " form";

$subject = ($form === 'plan' ? 'New plan request: ' : 'New enquiry: ') . $name;
$subject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

$headers = [
    'From: NovaNode website <' . FROM_EMAIL . '>',
    'Content-Type: text/plain; charset=UTF-8',
];
if (filter_var($replyTo, FILTER_VALIDATE_EMAIL)) {
    $headers[] = 'Reply-To: ' . $replyTo;
}

$sent = mail(TO_EMAIL, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    reply(500, ['ok' => false, 'error' => 'The message didn’t send. Email hello@novanode.com.au directly and we’ll reply within 24 hours.']);
}
reply(200, ['ok' => true]);
