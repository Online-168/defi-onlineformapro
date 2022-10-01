<?php

require_once 'tools/functions.php';
require_once 'tools/database/req.php';

$GLOBALS['ROOT_DOCUMENT'] = realpath($_SERVER['DOCUMENT_ROOT']);

function getUri()
{
	return explode('?', $_SERVER['REQUEST_URI'])[0];
}

function controllers(string $name): string
{
	return getPath('controllers') . $name . 'Controller.php';
}

function views(string $name): string
{
	return getPath('views') . $name . 'View.twig';
}

function getPath(string $type): string
{
	return $GLOBALS['ROOT_DOCUMENT'] . DIRECTORY_SEPARATOR . $type . DIRECTORY_SEPARATOR;
}