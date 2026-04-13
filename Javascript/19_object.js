const obj1 = {
    key1 : ``,
    key2 : 5
};

const obj2 = {
    key3 : ``,
    key4 : 5,
    key5 : function(){
        console.log(`test : key5`);
    },
    key6 : function key6(){
        console.log(`test : key6`);
    },
    key7(){
        console.log(`test : key7`);
    }
};

obj2.key5();
obj2.key6();
obj2.key7();

/* 
주의
*/