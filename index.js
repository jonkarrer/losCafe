//Make Home Page Default
(function(){
    //Create Homepage
    const content = document.getElementById('content');
    const table = ['titleTab', 'midTab', 'bottomTab','Menu','Info','Order'];
    
    for(let i = 0; i < table.length; i++) {
        let div = document.createElement('div');
        div.id = table[i];
        content.appendChild(div);
    };
    const tabs = ['Menu', 'Info', 'Specials'];
    const bars = [
        document.getElementById('Menu'),
        document.getElementById('Info'),
        document.getElementById('Order'),
    ];
    for(let i = 0; i < tabs.length; i++){
        let p = document.createElement('p');
        p.innerText = tabs[i];
        bars[i].appendChild(p);
};
    const titleTab = document.getElementById('titleTab');
    const midTab = document.getElementById('midTab');
    const bottomTab = document.getElementById('bottomTab');
    const h = document.createElement('h1');
    
    h.innerText = "Lo's";
    titleTab.appendChild(h);
    midTab.appendChild(bars[0]);
    midTab.appendChild(bars[1]);
    bottomTab.appendChild(bars[2]);

    console.log(content);
})();
//Make Menu Tab
const menu = {
    element: document.getElementById('Menu'),
    headers: ['Starters', 'Classics', 'Vegan', 'Sides'],
    makeMe: function() {
        this.element.style.width = '500px';
        this.element.style.height = '600px';
        this.element.style.maxHeight = '700px';
    },
    formatMe: function() {
        this.element.firstChild.innerText = '';
        let menu = [
            ['Biscuit Tops', 'French Toast', 'Quiche'],
            ['Seafood Omlette', 'Morning Spread', 'Chicken n Waffle'],
            ['Power Bowl', 'Hashbrown Skillet', 'Breakfast Salad'],
            ['Pancake', 'Biscuit', 'Bacon']
        ]
        for(let i=0; i < this.headers.length; i++){
            let n = 0;
            let ul = document.createElement('ul');
            ul.id = 'ul1';
            let h2 = document.createElement('h2');
            h2.innerText = this.headers[i];
            ul.appendChild(h2);
            while (n < 3){
                let li = document.createElement('li');
                li.innerText = menu[i][n];
                ul.appendChild(li);
                n+=1;
            }; 
            this.element.appendChild(ul);
        };  
    },
    deleteMe: function(){
        let bigList = document.querySelectorAll('ul');
        bigList.forEach(x => x.remove());
        this.element.style.width = '80px';
        this.element.style.height = '35vw';
        this.element.style.maxHeight = '300px';
        this.element.firstChild.innerText = 'Menu';
    },
    clickMe: function() {
        let y = 0;
        document.getElementById('Menu').addEventListener('click', function(){
            if(y % 2 === 0){
                menu.makeMe();
                menu.formatMe(); 
                specials.deleteMe();
            y+=1;
            }else{
                menu.deleteMe();
                y+=1;
            };
        });
    }
}
const info = {
    element: document.getElementById('Info'),
    headers: ['We Love Breakfast', 'Talk to Us', 'Hours'],
    makeMe: function() {
        this.element.style.width = '500px';
        this.element.style.height = '600px';
        this.element.style.maxHeight = '700px';
    },
    formatMe: function() {
        this.element.firstChild.innerText = '';
        let info = [
            'We love breakfast. Breakfast brings memories, conversation, and coffee. We make our food from scratch with talented chefs in the local area. Take a look at our daily specials!',
            'Phone: 222-222-2222', 'Thur-Sunday....5am-2pm' 
        ];
        let n = 0;
        for(let i=0; i < this.headers.length; i++){
            let div2 = document.createElement('div');
            let h3 = document.createElement('h3');
            let p2 = document.createElement('p2');
            div2.id = 'alpha';
            h3.innerText= this.headers[i];
            p2.innerText = info[i];
            div2.appendChild(h3);
            div2.appendChild(p2);
            this.element.appendChild(div2);
            n += 1;
        };  
        
    },
    deleteMe: function(){
        let bigList = document.querySelectorAll('#alpha');
        bigList.forEach(x => x.remove());
        
        this.element.style.width = '80px';
        this.element.style.height = '35vw';
        this.element.style.maxHeight = '300px';
        this.element.firstChild.innerText = 'Info';
    },
    clickMe: function() {
        let y = 0;
        document.getElementById('Info').addEventListener('click', function(){
            if(y % 2 === 0){
                info.makeMe();
                info.formatMe(); 
                specials.deleteMe();
            y+=1;
            }else{
                info.deleteMe();
                y+=1;
            };
        });
    }

}
const specials = {
    element: document.getElementById('Order'),
    midBar: document.querySelector('#midTab'),
    headers: ['Thursday','Friday','Saturday','Sunday'],
    makeMe: function() {
        this.element.style.width = '95vw';
        this.element.style.height = '50vh';
        this.element.style.maxHeight = '700px';
        document.getElementById('Menu').style.display= 'none';
        document.getElementById('Info').style.display= 'none';
    },
    formatMe: function() {
        this.element.firstChild.innerText = '';
        let info = [
            'Stuffed Pancakes... A fluffy stack of pancakes filled with berry compote and whip cream',
            'Day After... Thanksgiving themed breakfast sandwhich.', 
            'Big Oscar... A glorius 10 egg omlette with cheese.',
            'Biscuit Benny... 3 biscuit benedicts topped with fried chicken, poached egg, and holandaise.' 
        ];
        for(let i=0; i < this.headers.length; i++){
            let div2 = document.createElement('div');
            let h3 = document.createElement('h4');
            let p2 = document.createElement('p3');
            div2.id = 'beta';
            h3.innerText= this.headers[i];
            p2.innerText = info[i];
            div2.appendChild(h3);
            div2.appendChild(p2);
            this.element.appendChild(div2);
        };   
    },
    deleteMe: function(){
        let bigList = document.querySelectorAll('#beta');
        bigList.forEach(x => x.remove());
        document.getElementById('Menu').style.display= 'flex';
        document.getElementById('Info').style.display= 'flex';
        this.element.style.width = '35vw';
        this.element.style.height = '80px';
        this.element.firstChild.innerText = 'Specials';
    },
    clickMe: function() {
        let y = 0;
        document.getElementById('Order').addEventListener('click', function(){
            if(y % 2 === 0){
                specials.makeMe();
                specials.formatMe(); 
                info.deleteMe();
                menu.deleteMe();
            y+=1;
            }else{
                specials.deleteMe();
                y+=1;
            };
        });
    }
}
menu.clickMe();
info.clickMe();
specials.clickMe();


