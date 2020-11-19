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

function CalculateDailyWage(empHrs)
{
    let empWage = empHrs*WAGE_PERHOUR;
    return empWage;
}

//UC4 Monthly Wage Calculation
const MAX_WORK_HRS= 160;
const MAX_WORK_DAYS = 20;
let totalEmpHrs =0;
let totalWorkingDays =0;

//UC6 Add daily wages to array
let empDailyWageArray = new Array();

//const WORKING_DAYS = 5;
while(totalEmpHrs <= MAX_WORK_HRS && totalWorkingDays<= MAX_WORK_DAYS)
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10) % 3;
    let empHrs = getWorkingHours(empCheck);
    empDailyWageArray.push(CalculateDailyWage(empHrs));
    totalEmpHrs += empHrs;
}

let totalEmpWage = CalculateDailyWage(totalEmpHrs);
console.log("Total Emp Wage = "+totalEmpWage +" Total Working Days: "+(totalWorkingDays-1)+
        " Total Hrs: "+totalEmpHrs);


//UC7.1 Calculate Total Wage using DailWageArray
let totalWagefromArray=0;
function sum(dailyWage)
{
    totalWagefromArray += dailyWage;
}
empDailyWageArray.forEach(sum);
console.log("Total Wage from Array Helper Function "+totalWagefromArray);
//reduce function
function totalWages(totalWage,dailyWage)
{
    return totalWage+dailyWage;
}
console.log("Using reduce functions "+empDailyWageArray.reduce(totalWages,0));

//UC7.2 Mapping Day to DailyWage
let dayCount=0;
function dailyWageMapping(dailyWage)
{
    return((++dayCount) + " = "+dailyWage);
}
let MappedDailyWage = empDailyWageArray.map(dailyWageMapping);
console.log("Day wise Wage");
console.log(MappedDailyWage);

//UC7.3 Days when full time wage is 160
function fullTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
let fullWageDays= MappedDailyWage.filter(fullTimeWage);
console.log("Full Wage Days : ");
console.log(fullWageDays);

//UC7.4 First occurence of Full time wage in the array
console.log("First occurence of full time wage: "+MappedDailyWage.find(fullTimeWage));

//UC7.5 Check If all elements of FullWagedDays array contains full time wage
console.log("Does all elements of FullWagedDays array contains full time wage :" +fullWageDays.every(fullTimeWage));

//UC7.6 Check if there is any part time Wage
function isAnyPartTimeWage(dailyWage)
{
    return dailyWage.includes("80");
}
console.log("Is there any part time wage in FullWageDays Array : "+ fullWageDays.some(isAnyPartTimeWage));
console.log ("Is there any part time wage in MappedDailyWage Array : "+ MappedDailyWage.some(isAnyPartTimeWage));

//UC7.7 Find number of working days using ArrayHelper Function
function FindWorkingDays(numberOfDays, dailyWage)
{
    if(dailyWage>0)
        return (numberOfDays+1);
    
    return numberOfDays;
}
console.log("Employee Worked for "+empDailyWageArray.reduce(FindWorkingDays,0)+" days");