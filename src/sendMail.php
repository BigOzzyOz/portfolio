<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
        case("POST"): //Send the email;
            header("Access-Control-Allow-Origin: *");
            // Payload is not send to $_POST Variable,
            // is send to php:input as a text
            $json = file_get_contents('php://input');
            //parse the Payload from text format to Object
            $params = json_decode($json);
    
            $email = $params->email;
            $name = $params->name;
            $message = $params->message;
            $privacy = $params->privacy;
    
            $recipient = 'kontakt@jan-holtschke.de';  
            $subject = "Nachricht aus deinem Portfolio";
            $message = "
                <h2>Neue Nachricht über dein Portfolio</h2>
                <p><strong>Name:</strong> $name</p>
                <p><strong>E-Mail:</strong> $email</p>
                <p><strong>Nachricht:</strong><br>$message</p>
                <p>Diese Nachricht wurde über das Kontaktformular deines Portfolios gesendet.</p>
                <p><strong>Datenschutz akzeptiert:</strong> " . ($privacy ? 'Ja' : 'Nein') . "</p>
            ";
    
            $headers   = array();
            $headers[] = 'MIME-Version: 1.0';
            $headers[] = 'Content-type: text/html; charset=utf-8';
            $headers[] = "From: noreply@jan-holtschke.de";
            
            if (empty($email) || empty($name) || empty($message)) {
                http_response_code(400);
                echo "Missing required fields.";
                exit;
            }
            
            $headers[] = "Reply-To: $email";
    
            if (mail($recipient, $subject, $message, implode("\r\n", $headers))) {
                http_response_code(200);
                echo "Message sent successfully.";
            } else {
                http_response_code(500);
                echo "Failed to send message.";
            }
            break;
        default: //Reject any non POST or OPTIONS requests.
            header("Allow: POST", true, 405);
            exit;
    }
