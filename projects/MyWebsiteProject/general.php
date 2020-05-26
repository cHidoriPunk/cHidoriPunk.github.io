<?php

    $pageName = preg_replace('/\\.[^.\\s]{3,4}$/', '', basename($_SERVER['PHP_SELF']));

    function getHeaderClass(){

        global $pageName;
        $headerClass = null;
        switch($pageName){
            case 'index':
                $headerClass = 'home';
                break;
            default:
                $headerClass = $pageName;
                break;
        }
        echo $headerClass;
    }
