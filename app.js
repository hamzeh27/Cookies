/*function randomNum (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let SeattleShop={

    Max:65,
    Min:23,
    Avg:6.3,

    HourlyCustomers:0,

    AverageCookies:function(){
        this.HourlyCustomers=randomNum(this.Min,this.Max)
        return Math.floor(this.HourlyCustomers*this.Avg)
    } ,

    StoreAvgCookies:[] ,
    HourlyPerDay:[] ,
    StoreCookies:function(){
        for(let i=6;i<=20;i++){
            this.StoreAvgCookies.push(this.AverageCookies())
            if(i>12){
                this.HourlyPerDay.push(i-12+'pm: ');
            }else if(i<12){
                this.HourlyPerDay.push(i+'am: ');
            }else if (i=12){
                this.HourlyPerDay.push(i+'pm: ')
            }
        }
        return(this.HourlyPerDay,this.StoreAvgCookies)
    },

    HourlyAvgCookies:[],
    HourlyAvgCookiesFunction:function(){
        let total=0
        for(let i=0;i<14;i++){
            total=total+this.StoreAvgCookies[i]
            this.HourlyAvgCookies.push(this.HourlyPerDay[i]+''+this.StoreAvgCookies[i]+' cookies')
        }
        this.HourlyAvgCookies.push('Total: '+total+' cookies')
        return(this.HourlyAvgCookies)
    }
    }
    SeattleShop.StoreCookies();
    SeattleShop.HourlyAvgCookiesFunction();

    let Seattle=document.getElementById('Seattle');

    let SeattleList=document.createElement('ul');
    Seattle.appendChild(SeattleList);
    for(i=0;i<14;i++){
        let SeattleListItem=document.createElement('li');
        SeattleList.appendChild(SeattleListItem);
        SeattleListItem.textContent=SeattleShop.HourlyAvgCookies[i];
    }




let TokyoShop={

        Max:24,
        Min:3,
        Avg:1.2,
    
        HourlyCustomers:0,
    
        AverageCookies:function(){
            this.HourlyCustomers=randomAge(this.Min,this.Max)
            return Math.floor(this.HourlyCustomers*this.Avg)
        },
    
        StoreAvgCookies:[],
        HourlyPerDay:[],
        
        StoreCookies:function(){
            for(let i=6;i<=20;i++){
                this.StoreAvgCookies.push(this.AverageCookies())
                if(i>12){
                    this.HourlyPerDay.push(i-12+'pm: ');
                }else if(i<12){
                    this.HourlyPerDay.push(i+'am: ');
                }else if (i=12){
                    this.HourlyPerDay.push(i+'pm: ')
                }
            }
            return(this.HourlyPerDay,this.StoreAvgCookies)
        },
    
        HourlyAvgCookies:[],
        HourlyAvgCookiesFunction:function(){
            let total=0
            for(let i=0;i<14;i++){
                total=total+this.StoreAvgCookies[i]
                this.HourlyAvgCookies.push(this.HourlyPerDay[i]+''+this.StoreAvgCookies[i]+' cookies')
            }
            this.HourlyAvgCookies.push('Total: '+total+' cookies')
            return(this.HourlyAvgCookies)
        }
        }
        TokyoShop.StoreCookies();
        TokyoShop.HourlyAvgCookiesFunction();

    let Tokyo=document.getElementById('Tokyo');

    let TokyoList=document.createElement('ul');
    Tokyo.appendChild(TokyoList);
    for(i=0;i<14;i++){
        let TokyoListItem=document.createElement('li');
        TokyoList.appendChild(TokyoListItem);
        TokyoListItem.textContent=TokyoShop.HourlyAvgCookies[i];
    }

let DubaiShop={
        Max:38,
        Min:1,
        Avg:3.7,
    
        HourlyCustomers:0,
    
        AverageCookies:function(){
            this.HourlyCustomers=randomAge(this.Min,this.Max)
            return Math.floor(this.HourlyCustomers*this.Avg)
        },
    
        StoreAvgCookies:[],
        HourlyPerDay:[],
        
        StoreCookies:function(){
            for(let i=6;i<=20;i++){
                this.StoreAvgCookies.push(this.AverageCookies())
                if(i>12){
                    this.HourlyPerDay.push(i-12+'pm: ');
                }else if(i<12){
                    this.HourlyPerDay.push(i+'am: ');
                }else if (i=12){
                    this.HourlyPerDay.push(i+'pm: ')
                }
            }
            return(this.HourlyPerDay,this.StoreAvgCookies)
        },
    
        HourlyAvgCookies:[],
        HourlyAvgCookiesFunction:function(){
            let total=0
            for(let i=0;i<14;i++){
                total=total+this.StoreAvgCookies[i]
                this.HourlyAvgCookies.push(this.HourlyPerDay[i]+''+this.StoreAvgCookies[i]+' cookies')
            }
            this.HourlyAvgCookies.push('Total: '+total+' cookies')
            return(this.HourlyAvgCookies)
        }
        }
        DubaiShop.StoreCookies();
        DubaiShop.HourlyAvgCookiesFunction();

    let Dubai=document.getElementById('Dubai');

    let DubaiList=document.createElement('ul');
    Dubai.appendChild(DubaiList);
    for(i=0;i<14;i++){
        let DubaiListItem=document.createElement('li');
        DubaiList.appendChild(DubaiListItem);
        DubaiListItem.textContent=DubaiShop.HourlyAvgCookies[i];
    }

let ParisShop={
        Max:38,
        Min:20,
        Avg:2.3,
    
        HourlyCustomers:0,
    
        AverageCookies:function(){
            this.HourlyCustomers=randomAge(this.Min,this.Max)
            return Math.floor(this.HourlyCustomers*this.Avg)
        },
    
        StoreAvgCookies:[],
        HourlyPerDay:[],
        
        StoreCookies:function(){
            for(let i=6;i<=20;i++){
                this.StoreAvgCookies.push(this.AverageCookies())
                if(i>12){
                    this.HourlyPerDay.push(i-12+'pm: ');
                }else if(i<12){
                    this.HourlyPerDay.push(i+'am: ');
                }else if (i=12){
                    this.HourlyPerDay.push(i+'pm: ')
                }
            }
            return(this.HourlyPerDay,this.StoreAvgCookies)
        },
    
        HourlyAvgCookies:[],
        HourlyAvgCookiesFunction:function(){
            let total=0
            for(let i=0;i<14;i++){
                total=total+this.StoreAvgCookies[i]
                this.HourlyAvgCookies.push(this.HourlyPerDay[i]+''+this.StoreAvgCookies[i]+' cookies')
            }
            this.HourlyAvgCookies.push('Total: '+total+' cookies')
            return(this.HourlyAvgCookies)
        }
        }
        ParisShop.StoreCookies();
        ParisShop.HourlyAvgCookiesFunction();

    let Paris=document.getElementById('Paris');

    let ParisList=document.createElement('ul');
    Paris.appendChild(ParisList);
    for(i=0;i<14;i++){
        let ParisListItem=document.createElement('li');
        ParisList.appendChild(ParisListItem);
        ParisListItem.textContent=ParisShop.HourlyAvgCookies[i];
    }

let LimaShop={
        Max:16,
        Min:2,
        Avg:4.6,
    
        HourlyCustomers:0,
    
        AverageCookies:function(){
            this.HourlyCustomers=randomAge(this.Min,this.Max)
            return Math.floor(this.HourlyCustomers*this.Avg)
        },
    
        StoreAvgCookies:[],
        HourlyPerDay:[],
        
        StoreCookies:function(){
            for(let i=6;i<=20;i++){
                this.StoreAvgCookies.push(this.AverageCookies())
                if(i>12){
                    this.HourlyPerDay.push(i-12+'pm: ');
                }else if(i<12){
                    this.HourlyPerDay.push(i+'am: ');
                }else if (i=12){
                    this.HourlyPerDay.push(i+'pm: ')
                }
            }
            return(this.HourlyPerDay,this.StoreAvgCookies)
        },
    
        HourlyAvgCookies:[],
        HourlyAvgCookiesFunction:function(){
            let total=0
            for(let i=0;i<14;i++){
                total=total+this.StoreAvgCookies[i]
                this.HourlyAvgCookies.push(this.HourlyPerDay[i]+''+this.StoreAvgCookies[i]+' cookies')
            }
            this.HourlyAvgCookies.push('Total: '+total+' cookies')
            return(this.HourlyAvgCookies)
        }
        }
        LimaShop.StoreCookies();
        LimaShop.HourlyAvgCookiesFunction();

    let Lima=document.getElementById('Lima');

    let LimaList=document.createElement('ul');
    Lima.appendChild(LimaList);
    for(i=0;i<14;i++){
        let LimaListItem=document.createElement('li');
        LimaList.appendChild(LimaListItem);
        LimaListItem.textContent=LimaShop.HourlyAvgCookies[i];
    }*/
    class shop {
        constructor(shopName, min, max, avg) {
            this.min = min;
            this.max = max;
            this.avgCookiePerCustomer = avg;
            this.shopName = shopName;
            this.total = 0;
            this.list = this.generateList();
        }
      
        getRandom = function () {
            return Math.floor((Math.random() * (this.max - this.min) + this.min) * this.avgCookiePerCustomer);
        }
      
        workhour = [
            '6am',
            '7am',
            '8am',
            '9am',
            '10am',
            '11am',
            '12pm',
            '1pm',
            '2pm',
            '3pm',
            '4pm',
            '5pm',
            '6pm',
            '7pm',
        ];
        cookiesPerHour = [];
        generateList = function () {
            let result = [];
            for (const hour in this.workhour) {
                var cookies = this.getRandom();
                this.total += cookies;
                result.push(this.workhour[hour] + ': ' + cookies + ' cookies.');
            }
            result.push('Total: ' + this.total + ' cookies.')
            return result;
        }
      
        getHtml = function () {
            var root = document.createElement('div');
            root.innerHTML = "<h2 style='padding-left:15px;'>" +  + "</h2>";
            var ul = document.createElement('ul');
            for (let i = 0; i < this.list.length; i++) {
                const element = document.createElement('li');
                element.innerHTML = this.list[i];
                ul.appendChild(element)
            }
            root.appendChild(ul);
            return root;
        }
    
        getTableRow = function () {
            var html = "<tr><td class='tableElement'>" + this.shopName + "</td>";
            for (const hour in this.workhour) {
                var cookies = this.getRandom();
                this.cookiesPerHour.push(cookies);
                this.total += cookies;
                html+="\n<td class='tableElement'>" + cookies + "</td>";
            }
            html+="\n<td class='tableElement'>" + this.total + "</td>";
            html += "\n</tr>";
    
            this.cookiesPerHour.push( this.total);
            return html;
        }
      }
      
      var seattle = new shop('Seattle', 23, 65, 6.5);
      var Tokyo = new shop('Tokyo', 23, 65, 6.5);
      var Dubai = new shop('Dubai', 23, 65, 6.5);
      var Paris = new shop('Paris', 23, 65, 6.5);
      var Lima = new shop('Lima', 23, 65, 6.5);
      
    //   document.body.appendChild(seattle.getHtml());
    //   document.body.appendChild(Tokyo.getHtml());
    //   document.body.appendChild(Dubai.getHtml());
    //   document.body.appendChild(Paris.getHtml());
    //   document.body.appendChild(Lima.getHtml());
      
      var table = document.createElement('table');
      var header = [
        '6:00am',
        '7:00am',
        '8:00am',
        '9:00am',
        '10:00am',
        '11:00am',
        '12:00pm',
        '1:00pm',
        '2:00pm',
        '3:00pm',
        '4:00pm',
        '5:00pm',
        '6:00pm',
        '7:00pm',
    ];
    
    var tableContent = "<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>";
    header.forEach(element => {
        tableContent += "\n<td><b>" + element + "</b></td>"
    });
    tableContent += "\n<td>Daily Location Total</td></tr>";
    
    tableContent += seattle.getTableRow();
    tableContent += Tokyo.getTableRow();
    tableContent += Dubai.getTableRow();
    tableContent += Paris.getTableRow();
    tableContent += Lima.getTableRow();
    
    var footer = "<tr><td class='tableElement'> Totals </td>";
    var totalCookiesPerHour= [];
    for (let i = 0; i < 15; i++) {    
        var totalPerHour =  seattle.cookiesPerHour[i]
                            + Tokyo.cookiesPerHour[i]
                            + Dubai.cookiesPerHour[i]
                            + Paris.cookiesPerHour[i]
                            + Lima.cookiesPerHour[i];
    
                            console.log("["+i +"]" + seattle.cookiesPerHour[i]);
                            console.log("["+i +"]" + Tokyo.cookiesPerHour[i]);
                            console.log("["+i +"]" + Dubai.cookiesPerHour[i]);
                            console.log("["+i +"]" + Paris.cookiesPerHour[i]);
                            console.log("["+i +"]" + Lima.cookiesPerHour[i]);
        console.log(totalPerHour)
        totalCookiesPerHour.push(totalPerHour);
    }
    
    totalCookiesPerHour.forEach(cookies => {
        footer+="\n<td class='tableElement'>" + cookies + "</td>";
    });
    footer += "\n</tr>";
    
    tableContent += footer;
    
    table.innerHTML = tableContent;
    
    document.body.appendChild(table);