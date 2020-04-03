function loadXMLDoc(dname) {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", dname, false);
    xhttp.send();
    return xhttp.responseXML;
}


class GameListXml {
    constructor(xmlFlieName) {
        this.content = "game";
        this.th1 = "编号";
        this.th1_width = 160;
        this.th2 = "游戏名称";
        this.attr1 = 'FlagNo';
        this.attr2 = 'name';
        this.attr3 = 'cn_name';
        this.divTable = "xmlTable";
        this.xmlFlieName = xmlFlieName;
        this.xmlDoc = loadXMLDoc(this.xmlFlieName);
        this.contentList = this.xmlDoc.getElementsByTagName(this.content);
        this.contentLenth = this.contentList.length

        this.makeXMLHeader = function () { //解析xml文件头部信息
            this.divHeader = "xmlHeader"
            this.platform = this.xmlDoc.getElementsByTagName("platform")[0].childNodes[0].nodeValue;
            this.version = this.xmlDoc.getElementsByTagName("version")[0].childNodes[0].nodeValue;
            this.description = this.xmlDoc.getElementsByTagName("description")[0].childNodes[0].nodeValue;
            document.getElementById(this.divHeader).innerHTML = "<h2><p class=\"text-center\">" + this.description + "</p></h2>" +
                "<h3><p class=\"text-center\"><small>游戏平台：" +
                this.platform + "&nbsp&nbsp&nbsp&nbsp更新日期：" +
                this.version + "&nbsp&nbsp&nbsp&nbsp内容数量：" +
                this.contentLenth + "</small></p></h3>";
        };

        this.makeXMLTable = function () { //解析xml游戏列表，生产表格
            this.contentList = this.xmlDoc.getElementsByTagName(this.content);
            var xmlTable = document.getElementById(this.divTable);
            var div = document.createElement("div")
            div.setAttribute("class", "table table-striped table-hover");
            xmlTable.appendChild(div);
            var table = document.createElement("table");
            table.setAttribute("class", "table");
            div.appendChild(table);
            var thead = document.createElement("thead");
            table.appendChild(thead);
            var tr = document.createElement("tr");
            thead.appendChild(tr);
            var th1 = document.createElement("th");
            th1.setAttribute("width", this.th1_width)
            var th1_txt = document.createTextNode(this.th1);
            th1.appendChild(th1_txt)
            tr.appendChild(th1)
            var th2 = document.createElement("th");
            var th2_txt = document.createTextNode(this.th2);
            th2.appendChild(th2_txt);
            tr.appendChild(th2);
            var tbody = document.createElement("tbody");
            table.appendChild(tbody);
            for (let i = 0; i < this.contentList.length; i++) {
                var tr = document.createElement("tr");
                tbody.appendChild(tr);
                var td1 = document.createElement("td");
                var td1_txt = document.createTextNode(this.contentList[i].attributes[this.attr1].nodeValue);
                td1.setAttribute('class', 'text-success');
                td1.appendChild(td1_txt);
                var td2 = document.createElement("td");
                //var td2_txt = document.createTextNode(this.contentList[i].attributes[this.attr2].nodeValue+"<br>"+this.contentList[i].attributes[this.attr3].nodeValue);
                //td2.appendChild(td2_txt);
                if (!this.contentList[i].attributes[this.attr3]) {
                    var td2_txt = document.createTextNode(this.contentList[i].attributes[this.attr2].nodeValue);
                    td2.appendChild(td2_txt);
                }
                else {
                    td2.innerHTML = this.contentList[i].attributes[this.attr2].nodeValue + "<br>" + this.contentList[i].attributes[this.attr3].nodeValue;
                }

                tr.appendChild(td1);
                tr.appendChild(td2);
            }
        }
    }
}

function readLog(logFile) {
    document.writeln("<h2><p class=\"text-center\">更新日志</p></h2><br>");
    var odj = new GameListXml(logFile);
    odj.divTable = "logTable"
    odj.th1 = "时间"
    odj.th2 = "内容"
    odj.attr1 = 'Time'
    odj.attr2 = 'Text'
    odj.content = 'log'
    odj.makeXMLTable();
}

function readList(xmllist) {
    for (i=0;i<xmllist.length;i++){
        xmlDoc = loadXMLDoc(xmllist[i][0]);
        contentList = xmlDoc.getElementsByTagName("game");
        description = xmlDoc.getElementsByTagName("description")[0].childNodes[0].nodeValue;
        listLen=contentList.length;
        document.writeln('<a href='+xmllist[i][1]+'><h2>'+description+'（'+listLen+'个）</h2></a><br>');
    }
    
}