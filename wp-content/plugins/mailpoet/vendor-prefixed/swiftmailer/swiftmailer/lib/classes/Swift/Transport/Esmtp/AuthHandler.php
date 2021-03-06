<?php
namespace MailPoetVendor;
if (!defined('ABSPATH')) exit;
class Swift_Transport_Esmtp_AuthHandler implements Swift_Transport_EsmtpHandler
{
 private $authenticators = [];
 private $username;
 private $password;
 private $auth_mode;
 private $esmtpParams = [];
 public function __construct(array $authenticators)
 {
 $this->setAuthenticators($authenticators);
 }
 public function setAuthenticators(array $authenticators)
 {
 $this->authenticators = $authenticators;
 }
 public function getAuthenticators()
 {
 return $this->authenticators;
 }
 public function setUsername($username)
 {
 $this->username = $username;
 }
 public function getUsername()
 {
 return $this->username;
 }
 public function setPassword($password)
 {
 $this->password = $password;
 }
 public function getPassword()
 {
 return $this->password;
 }
 public function setAuthMode($mode)
 {
 $this->auth_mode = $mode;
 }
 public function getAuthMode()
 {
 return $this->auth_mode;
 }
 public function getHandledKeyword()
 {
 return 'AUTH';
 }
 public function setKeywordParams(array $parameters)
 {
 $this->esmtpParams = $parameters;
 }
 public function afterEhlo(Swift_Transport_SmtpAgent $agent)
 {
 if ($this->username) {
 $count = 0;
 $errors = [];
 foreach ($this->getAuthenticatorsForAgent() as $authenticator) {
 if (\in_array(\strtolower($authenticator->getAuthKeyword() ?? ''), \array_map('strtolower', $this->esmtpParams))) {
 ++$count;
 try {
 if ($authenticator->authenticate($agent, $this->username, $this->password)) {
 return;
 }
 } catch (Swift_TransportException $e) {
 // keep the error message, but tries the other authenticators
 $errors[] = [$authenticator->getAuthKeyword(), $e->getMessage()];
 }
 }
 }
 $message = 'Failed to authenticate on SMTP server with username "' . $this->username . '" using ' . $count . ' possible authenticators.';
 foreach ($errors as $error) {
 $message .= ' Authenticator ' . $error[0] . ' returned ' . $error[1] . '.';
 }
 throw new Swift_TransportException($message);
 }
 }
 public function getMailParams()
 {
 return [];
 }
 public function getRcptParams()
 {
 return [];
 }
 public function onCommand(Swift_Transport_SmtpAgent $agent, $command, $codes = [], &$failedRecipients = null, &$stop = \false)
 {
 }
 public function getPriorityOver($esmtpKeyword)
 {
 return 0;
 }
 public function exposeMixinMethods()
 {
 return ['setUsername', 'getUsername', 'setPassword', 'getPassword', 'setAuthMode', 'getAuthMode'];
 }
 public function resetState()
 {
 }
 protected function getAuthenticatorsForAgent()
 {
 if (!($mode = \strtolower($this->auth_mode ?? ''))) {
 return $this->authenticators;
 }
 foreach ($this->authenticators as $authenticator) {
 if (\strtolower($authenticator->getAuthKeyword() ?? '') == $mode) {
 return [$authenticator];
 }
 }
 throw new Swift_TransportException('Auth mode ' . $mode . ' is invalid');
 }
}
