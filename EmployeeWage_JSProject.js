//Hello Welcome to EmployeeWage Management project in JavaScript

//UC1 CheckAbsence
const IS_ABSENT =0;
let empCheck = Math.floor(Math.random()*10) %2;
if(empCheck == IS_ABSENT)
{
    console.log("Employee is Absent");
}
else{
    console.log("Employee is present");
}

//UC2 DailyWage Calculation based on Part Time or Full Time
const IS_FULLTIME=2;
const IS_PARTTIME=1;
const PARTTIME_HOURS=4;
const FULLTIME_HOURS=8;
const WAGE_PERHOUR=20;

function getWorkingHours(empCheck)
{
    switch(empCheck)
    {
        case IS_PARTTIME :
            return PARTTIME_HOURS;
        
        case IS_FULLTIME :
            return FULLTIME_HOURS;
            
        default:
            return 0;
    }
}

//UC4 Monthly Wage Calculation
const MAX_WORK_HRS= 160;
const MAX_WORK_DAYS = 20;
let totalEmpHrs =0;
let totalWorkingDays =0;
//const WORKING_DAYS = 5;
while(totalEmpHrs <= MAX_WORK_HRS && totalWorkingDays<= MAX_WORK_DAYS)
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10) %3;
    totalEmpHrs += getWorkingHours(empCheck);
}
let empWage = empHrs*WAGE_PERHOUR;
console.log("Emp Wage = "+empWage + "Total Hrs: "+empHrs);


