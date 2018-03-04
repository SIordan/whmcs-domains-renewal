# whmcs-domains-renewal
Only display domain renewal terms that won't result in an expiry date of more than 10 years for WHMCS software.

This script works for the following files:
* cart.php?gid=renewals
* clientarea.php?action=domains

This script works only for the "six" template.

In the head section of your header.tpl (located in /templates/six/) you need to include this line : {include file="$template/includes/headdomains.tpl"}
