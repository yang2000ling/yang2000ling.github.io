const headerV = {
    template: '<div>\n' +
        '<v-navigation-drawer v-model="drawer" app><v-card class="mx-auto" width="300">' +
        '<v-list nav>' +
        '<v-subheader><span style="color: black"><h1>ROM猎人</h1></span></v-subheader>'+
        '<v-divider></v-divider>'+
        '<v-list-item-group>'+
        '<v-list-item to="/index">' +
        '<v-list-item-title>主页</v-list-item-title>' +
        '</v-list-item>' +
        '<v-list-item to="/table/log">' +
        '<v-list-item-title >更新日志</v-list-item-title>' +
        '</v-list-item>' +
        '<v-list-item to="/table/psv_dlc">' +
        '<v-list-item-title>PSV DLC目录</v-list-item-title>' +
        '</v-list-item>' +
        '</v-list-item-group></v-list-item-group></v-list></v-card>' +
        '</v-navigation-drawer>\n'+
        '            <v-app-bar dark app>\n' +
        '<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>\n'+
        '                <v-toolbar-title v-show="!drawer"><a href="#/index"><span style="color: white"><h3>ROM猎人</h3></span></a></v-toolbar-title>\n' +
        '                <v-spacer></v-spacer>\n' +
        '                <div class="text-center" v-show="navtext">\n' +
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
        '        </div>',
    data: function () {
        return {
            drawer:false,
            items: [
                {title: '掌机平台'},
                {title: '家用机平台'},
                {title: '街机平台'},
                {title: '各平台BIOS'},
            ]
        }
    },
    computed:{
        navtext(){
            return this.$vuetify.breakpoint.width > 700;
        }
    }
}

const bottom = {
    template:
        '<div class=\'bottom text-center\'>' +
        '<br><br>' +
        '<p><small>如有内容侵权请致邮aeeleling@gmail.com，本站将及时处理。' +
        '<br>Powered by seele<br>' +
        'Copyright © 2019-2021&nbsp<a href="index.html">ROM猎人</a>&nbsp<a href="index.html">yang2000ling.com</a>&nbsp&nbspAll Rights Reserved.</small></p>' +
        '</div>'
}

const table = {
    props:['plate'],
    data: function () {
        return {
            itemsPerPage:20,
            search: '',
            message: [],
            tableFooter: {
                showFirstLastPage: true,
                itemsPerPageAllText: "全部",
                itemsPerPageText: '每页行数',
                showCurrentPage: true,
                firstIcon: 'mdi-arrow-collapse-left',
                lastIcon: 'mdi-arrow-collapse-right',
                prevIcon: 'mdi-minus',
                nextIcon: 'mdi-plus',
                itemsPerPageOptions: [10, 50, 100, -1]
            }
        }
    },
    methods: {
        fetchData () {
            axios
                .get('./data/'+this.$route.params.plate+'.json')
                .then(response => (this.message = response.data))
        }
    },
    watch: {
        // 如果路由有变化，会再次执行该方法
        '$route': 'fetchData'
    },
    mounted() {
        this.fetchData()
    },
    template:
        '<v-card>\n' +
        '                    <v-card-title><h2>{{message.name}}</h2>\n' +
        '                        <v-chip class="ma-2">共{{message.content.length}}个</v-chip>\n' +
        '                        <v-spacer></v-spacer>\n' +
        '                        <v-text-field\n' +
        '                                v-model="search"\n' +
        '                                append-icon="mdi-magnify"\n' +
        '                                label="搜索本目录"\n' +
        '                                single-line\n' +
        '                                hide-details\n' +
        '                        ></v-text-field>\n' +
        '                    </v-card-title>\n' +
        '                    <v-data-table\n' +
        '                            :headers="message.header"\n' +
        '                            :items="message.content"\n' +
        '                            :items-per-page="itemsPerPage"\n' +
        '                            class="elevation-1"\n' +
        '                            :search="search"\n' +
        '                            :footer-props="tableFooter"\n' +
        '                    >' +
        '<template v-slot:item.game_name="{ item }">{{item.game_name}}<br><span style="color: brown">{{item.ch_name}}</span></template>' +
        '</v-data-table>' +
        '</v-card>',
}

const index = {
    computed: {
        height () {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return 250
                case 'sm': return 300
                case 'md': return 350
                case 'lg': return 400
                case 'xl': return 450
            }
        }
    },
    template:
        '<div class=\"d-flex flex-column justify-space-between align-center\">\n' +
        '<v-img lazy-src=\"./img/cat200.jpg\" :max-width=\"height\" src=\"./img/cat_big.jpg\"></v-img>\n' +
        '<h1 class="v-heading text-h3">欢迎访问 ROM猎人</h1><br>\n' +
        '<p class="mx-auto" style="max-width: 600px;">本站为个人工作之余，打发闲暇时间的作品，主要目的是为了给大家提供各个平台游戏资源和模拟器教程，方便大家收集游玩。\n' +
        '                        所有资源均已测包，请大家放心使用。推荐用WINRAR进行解压，如下载两次均解压失败，请电邮直接联系站长。</p>' +
        '</div>',
}