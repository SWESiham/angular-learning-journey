var urerName:string='ahmed';
var num:number=4;
var bol:boolean=true;
var x:undefined=undefined;
var y:null=null;
 
var arr:any[]=[2,4,3,'d',true]
//tuple
var arr1:[number,string,string]=[5,'a','b']
//uonion 
var str:string|boolean='ahmed'
var c:any;

// function add(nu1:number,num2:number):number{
//     return nu1+num2
// }
// console.log(add(2,3))

function message():void{
    console.log('hello')
}
 message()

 //generic
 function getList<hamada>(list:hamada[]):hamada[]{
    return list
 }

 console.log(getList([2,3,'s']))
 console.log(getList(['a','b']))
 console.log(getList([true,false]))
 import {User} from './IUser'
 var  obj:User={
    name:'ahmed',
    age:20,
    job:'developer',
    details:function(){
        console.log(this)
    }
 }
 console.log(obj)

 class user implements User{
    constructor(  public name:string,   public age:number,public job:string){
        name=name;
        age=age;
     
    }
    details():void{
        console.log(this)
    }
 }
 var u=new user('ahmed',20,'developer')
console.log(u)
import {add} from './add'
console.log(add(2,3))
import {student} from './additional'
var std:student={
  id:1,
  name:'ali',
  age:30,job:'doctor'
}
console.log(std)