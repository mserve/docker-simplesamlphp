<?php

$config = array(

    // This is a authentication source which handles admin authentication.
    'admin' => array(
        // The default is to use core:AdminPassword, but it can be replaced with
        // any authentication source.

        'core:AdminPassword',
    ),



    'example-userpass' => array(
        'exampleauth:UserPass',

        // Give the user an option to save their username for future login attempts
        // And when enabled, what should the default be, to save the username or not
        //'remember.username.enabled' => FALSE,
        //'remember.username.checked' => FALSE,

        'student:studentpass' => array(
            'uid' => array('test'),
            'eduPersonAffiliation' => array('member', 'student'),
            'hotpToken' => array('otpauth://totp/Example%20University,%20Faculty%20of%20Engineering:student@example.edu?secret=YPUF3ETVVROF3FCJ5OHROZA6BQWEVR35&issuer=Example%20University%2C%20Faculty%20of%20Engineering&algorithm=SHA1&digits=6&period=30')
        ),
        'employee:employeepass' => array(
            'uid' => array('employee'),
            'eduPersonAffiliation' => array('member', 'employee'),
        ),
    ),
);
