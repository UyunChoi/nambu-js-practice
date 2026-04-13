function Student(name, id){
    this.name = name;
    this.id = id;
    this.totalAttendance = 0;
    this.attend = function(check){
        let dayCheck;
        if(check === true){
            totalAttendance += 1;
            dayCheck = `당일 출석`;
        }else{
            dayCheck = `당일 결석`;
        }
        return dayCheck;
    };
}

const student1 = new Student('name1', 1);

