<?php

$location = array("Europe/London", "America/New_York", "Asia/Hong_Kong", "Africa/Nairobi", "Europe/Moscow", "America/Denver");

$amount = count($location);

$generated_arr = array();

$return_str = '{';

for ($i = 0; $i <= $amount; $i++) {
    $random = rand(0, count($location)-1);

    if (in_array($random, $generated_arr)) {
        continue;
        
    } else {
        array_push($generated_arr, $random);
        $value = $location[$random];
        date_default_timezone_set($value);
        $value = substr($value, strpos($value, '/') + 1);
        $value = str_replace('_', ' ', $value);
        $return_str .= '"'.$value.'":"'.date('c').'", ';
    }
}

$return_str = substr_replace($return_str, '', -2);

$return_str .= '}';
    
print $return_str;

?>