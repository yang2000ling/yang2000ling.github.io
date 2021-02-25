function navigation() {
    document.writeln("<div>");
    document.writeln("        <!-- As a heading -->");
    document.writeln("        <b-navbar variant=\'dark\' type=\'dark\' fixed=\'top\' toggleable=\'lg\'>");
    document.writeln("            <b-navbar-brand>");
    document.writeln("                <img src=\'./img/cat.jpg\' alt=\'Kitten\'>");
    document.writeln("                <STRONG>ROM猎人</STRONG>");
    document.writeln("            </b-navbar-brand>");
    document.writeln("            <b-navbar-toggle target=\'nav-collapse\'></b-navbar-toggle>");
    document.writeln("            <b-collapse id=\'nav-collapse\' is-nav>");
    document.writeln("                <b-navbar-nav>");
    document.writeln("                    <b-nav-item href=\'#\'>首页</b-nav-item>");
    document.writeln("                    <b-nav-item href=\'#\'>更新日志</b-nav-item>");
    document.writeln("                    <!-- Navbar dropdowns -->");
    document.writeln("                    <b-nav-item-dropdown text=\'游戏目录与相关下载\' right>");
    document.writeln("                        <b-dropdown-item href=\'#\'>掌机平台</b-dropdown-item>");
    document.writeln("                        <b-dropdown-item href=\'#\'>家用机平台</b-dropdown-item>");
    document.writeln("                        <b-dropdown-item href=\'#\'>街机平台</b-dropdown-item>");
    document.writeln("                        <b-dropdown-item href=\'#\'>模拟器BIOS</b-dropdown-item>");
    document.writeln("                    </b-nav-item-dropdown>");
    document.writeln("                    <b-nav-item href=\'#\'>模拟器教程与下载</b-nav-item>");
    document.writeln("                </b-navbar-nav>");
    document.writeln("            </b-collapse>");
    document.writeln("        </b-navbar>");
    document.writeln("    </div>");
}

function bottom() {
    document.writeln("<div class=\'bottom text-center\'>");
    document.writeln("			<br><br><p>如有内容侵权请致邮aeeleling@gmail.com，本站将会及时处理。<br>Powered by seele<br>Copyright © 2019-2021&nbsp&nbspyang2000ling.com&nbsp&nbspAll Rights Reserved.</p>");
    document.writeln("		</div>");
}