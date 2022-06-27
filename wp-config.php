<?php
/**
 * Cấu hình cơ bản cho WordPress
 *
 * Trong quá trình cài đặt, file "wp-config.php" sẽ được tạo dựa trên nội dung 
 * mẫu của file này. Bạn không bắt buộc phải sử dụng giao diện web để cài đặt, 
 * chỉ cần lưu file này lại với tên "wp-config.php" và điền các thông tin cần thiết.
 *
 * File này chứa các thiết lập sau:
 *
 * * Thiết lập MySQL
 * * Các khóa bí mật
 * * Tiền tố cho các bảng database
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Thiết lập MySQL - Bạn có thể lấy các thông tin này từ host/server ** //
/** Tên database MySQL */
define( 'DB_NAME', 'vandong' );

/** Username của database */
define( 'DB_USER', 'vandong' );

/** Mật khẩu của database */
define( 'DB_PASSWORD', 'tinhyeu12345@' );

/** Hostname của database */
define( 'DB_HOST', 'localhost' );

/** Database charset sử dụng để tạo bảng database. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Kiểu database collate. Đừng thay đổi nếu không hiểu rõ. */
define('DB_COLLATE', '');

/**#@+
 * Khóa xác thực và salt.
 *
 * Thay đổi các giá trị dưới đây thành các khóa không trùng nhau!
 * Bạn có thể tạo ra các khóa này bằng công cụ
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * Bạn có thể thay đổi chúng bất cứ lúc nào để vô hiệu hóa tất cả
 * các cookie hiện có. Điều này sẽ buộc tất cả người dùng phải đăng nhập lại.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'ZH NS]XY?o! I`Q^P%Od*}{m[/QniT.<)(j_oa!;skrcy#Y0#jBU&vw!ruw9cwYq' );
define( 'SECURE_AUTH_KEY',  'f6 <qE&1(n[q}ws>W0$BDNj*SA]88Sj^zpaz)`3>aRT)w,P=l!l}C_-u W8!O-{l' );
define( 'LOGGED_IN_KEY',    'lZCk)%oH/i6&WZDNF4P>RPDUVp${RLa579=$3H&[F@$aT07VfXUydlV5^f)07Dh.' );
define( 'NONCE_KEY',        '5Zpu[t8W}U7@_]cGGx0x}+n4wG|N24 6A2RZw4TL}K3v|swW<97HeE2|9!IGJ.58' );
define( 'AUTH_SALT',        'q.1lVYo[HSItv63kG$y=~!Ol1~]gX#b==$nJeh`C%Nw^_-CjVe;.tq*]>M5Te!{y' );
define( 'SECURE_AUTH_SALT', 'uug4>7xO]~>{rNI9_uHHku666yvqQT3c[WQfCUE=}sUI-FvYSUOrD}EJM&)Y1b.9' );
define( 'LOGGED_IN_SALT',   ' 1M7BCYYHPnK>hY/HIJ}!+_F!X&d1>X5lNR+$K;2NO]{)W|DFxRpN5p!y1Mh/!mw' );
define( 'NONCE_SALT',       ';dIouemY*&}(u?.WtbEy-0^PqM-89Y0C}OB<sKv/>VmgohBu|1>t}|bCZT-|}Yk6' );

/**#@-*/

/**
 * Tiền tố cho bảng database.
 *
 * Đặt tiền tố cho bảng giúp bạn có thể cài nhiều site WordPress vào cùng một database.
 * Chỉ sử dụng số, ký tự và dấu gạch dưới!
 */
$table_prefix = 'wp_admin';

/**
 * Dành cho developer: Chế độ debug.
 *
 * Thay đổi hằng số này thành true sẽ làm hiện lên các thông báo trong quá trình phát triển.
 * Chúng tôi khuyến cáo các developer sử dụng WP_DEBUG trong quá trình phát triển plugin và theme.
 *
 * Để có thông tin về các hằng số khác có thể sử dụng khi debug, hãy xem tại Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Đó là tất cả thiết lập, ngưng sửa từ phần này trở xuống. Chúc bạn viết blog vui vẻ. */

/** Đường dẫn tuyệt đối đến thư mục cài đặt WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Thiết lập biến và include file. */
require_once(ABSPATH . 'wp-settings.php');
