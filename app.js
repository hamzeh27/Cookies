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
    'use strict';
const workingHours = ['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM']

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let shopArray = [];
function Shops(locationName, minCustomer, maxCustomer, avgCookies) {
    this.locationName = locationName;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookies = avgCookies;
    this.customersEachHour = [];
    this.cookiesEachHous = [];
    this.totalCookiesPerDay = 0;
    shopArray.push(this);


}

Shops.prototype.clacCustomersEachHour = function () {
    for (let i = 0; i < workingHours.length; i++) {
        this.customersEachHour.push(random(this.minCustomer, this.maxCustomer));


    }
}
Shops.prototype.calcCookiesEachHous = function () {
    for (let i = 0; i < workingHours.length; i++) {

        this.cookiesEachHous.push(Math.ceil(this.avgCookies * this.customersEachHour[i]));
        this.totalCookiesPerDay += this.cookiesEachHous[i];
    }

}
let seattle = new Shops('Seattle', 23, 65, 6.3);
let Tokyo = new Shops('Tokyo', 3, 24, 1.2);
let Dubai = new Shops('Dubai', 11, 38, 3.7);
let Paris = new Shops('Paris', 30, 38, 2.3);
let Lima = new Shops('Lima', 2, 16, 4.6);


let parent = document.getElementById('result');
let tableElement = document.createElement('table');
parent.appendChild(tableElement);

function makeHeadr() {
    let headerRow = document.createElement('tr');
    tableElement.appendChild(headerRow);

    let firstTh = document.createElement('th');
    headerRow.appendChild(firstTh);
    firstTh.textContent = 'Name';

    for (let i = 0; i < workingHours.length; i++) {
        let thElement = document.createElement('th');
        headerRow.appendChild(thElement);
        thElement.textContent = workingHours[i]


    }
    let lastTh = document.createElement('th');
    headerRow.appendChild(lastTh);
    lastTh.textContent = 'Daily Location Total';

}


Shops.prototype.render = function () {
    let dataRow = document.createElement('tr');
    tableElement.appendChild(dataRow);
    let nameData = document.createElement('td');
    dataRow.appendChild(nameData);
    nameData.textContent = this.locationName;
    for (let i = 0; i < workingHours.length; i++) {
        let tdElement = document.createElement('td');
        dataRow.appendChild(tdElement);
        tdElement.textContent = this.customersEachHour[i];


    }
    let totalDailyForEachShop = document.createElement('td');
    dataRow.appendChild(totalDailyForEachShop);
    totalDailyForEachShop.textContent = this.totalCookiesPerDay;
}



function makeFooter() {
    let footerRow = document.createElement('tr');
    tableElement.appendChild(footerRow);
    let footerTh = document.createElement('th');
    footerRow.appendChild(footerTh);
    footerTh.textContent = 'Totals';

    let megaTotal = 0;
    for (let i = 0; i < workingHours.length; i++) {
        let totalEachHour = 0;
        for (let j = 0; j < shopArray.length; j++) {

            totalEachHour += shopArray[j].cookiesEachHous[i];




        }
        megaTotal += totalEachHour;
        let footerData = document.createElement('td');
        footerRow.appendChild(footerData);
        footerData.textContent = totalEachHour;
    }
    let finalTd = document.createElement('td');
    footerRow.appendChild(finalTd);
    finalTd.textContent = megaTotal;
}
const cookiesForm = document.getElementById('cookiesForm');
cookiesForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    let newLocation = event.target.shopname.value;

    let newMincust = event.target.min.value;
    newMincust = parseInt(newMincust);

    let newMaxcust = event.target.max.value;
    newMaxcust = parseInt(newMaxcust);

    let newAvgcust = event.target.avg.value;
    newAvgcust = parseFloat(newAvgcust);

    let newShops = new Shops(newLocation, newMincust, newMaxcust, newAvgcust)


    newShops.clacCustomersEachHour();
    newShops.calcCookiesEachHous();

    let deleted = tableElement.rows.length - 1
    tableElement.deleteRow(deleted);

    newShops.render();

    makeFooter();

}
makeHeadr();

for (let i = 0; i < shopArray.length; i++) {
    shopArray[i].clacCustomersEachHour();
    shopArray[i].calcCookiesEachHous();
    shopArray[i].render();
}


makeFooter();