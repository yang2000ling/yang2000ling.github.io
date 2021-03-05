var headerV = {
    data: function () {
        return {
            items: [
                {title: '掌机平台'},
                {title: '家用机平台'},
                {title: '街机平台'},
                {title: '各平台BIOS'},
            ]
        }
        },
    template:'<div>\n' +
        '            <v-app-bar fixed dark>\n' +
        '                <v-toolbar-title><a href="index.html"><span style="color: white"><h3>ROM猎人</h3></span></a></v-toolbar-title>\n' +
        '                <v-spacer></v-spacer>\n' +
        '                <div class="text-center">\n' +
        '                    <v-btn text>\n' +
        '                        更新日志\n' +
        '                    </v-btn>\n' +
        '                    <v-menu offset-y>\n' +
        '                        <template v-slot:activator="{ on, attrs }">\n' +
        '                            <v-btn text v-bind="attrs" v-on="on">\n' +
        '                                游戏目录与相关下载\n' +
        '                            </v-btn>\n' +
        '                        </template>\n' +
        '                        <v-list>\n' +
        '                            <v-list-item v-for="(item, index) in items" :key="index">\n' +
        '                                <v-list-item-title>{{ item.title }}</v-list-item-title>\n' +
        '                            </v-list-item>\n' +
        '                        </v-list>\n' +
        '                    </v-menu>\n' +
        '                    <v-btn text>\n' +
        '                        模拟器教程与相关下载\n' +
        '                    </v-btn>\n' +
        '                </div>\n' +
        '            </v-app-bar>\n' +
        '        </div>'
}
var bottom = {
    template:
        '<div class=\'bottom text-center\'>' +
        '<br><br>' +
        '<p><small>如有内容侵权请致邮aeeleling@gmail.com，本站将及时处理。' +
        '<br>Powered by seele<br>' +
        'Copyright © 2019-2021&nbsp<a href="index.html">ROM猎人</a>&nbsp<a href="index.html">yang2000ling.com</a>&nbsp&nbspAll Rights Reserved.</small></p>' +
        '</div>'
}

