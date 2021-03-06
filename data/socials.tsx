import {BsMailbox} from 'react-icons/bs'
import {RiFacebookFill,RiInstagramLine,RiGithubLine,RiLinkedinFill, RiTwitterFill} from 'react-icons/ri';
import {FaYoutube} from 'react-icons/fa';
import { ReactElement } from 'react';
interface item {
    color:string;
    icon:ReactElement;
    path:string;
    title:string;
}
export const socials:item[] = [
    {
        color:'#1877f2',
        icon:<RiFacebookFill/>,
        path:'https://www.facebook.com/RadWeb-Programowanie-i-SEO-103383665586914',
        title:'RadWEB - Programowanie i SEO | Facebook'
    },
    {
        color:'#c32aa3',
        icon:<RiInstagramLine/>,
        path:'https://www.instagram.com/radoslawadamczyk2000/',
        title:'@radoslawadamczyk2000 | Instagram'
    },
    {
        color:'#ff0000',
        icon:<FaYoutube/>,
        path:'https://www.youtube.com/channel/UCOHB1fpEKwxhjCEDNgVLEog',
        title:'RadWEB - Programowanie i SEO | YouTube'
    },
    {
        color:'#336699',
        icon:<RiGithubLine/>,
        path:'https://github.com/RadoslawAdamczyk2000',
        title:'RadoslawAdamczyk2000 | Github'
    },
    {
        color:'#1da1f2',
        icon:<RiTwitterFill/>,
        path:'https://twitter.com/rad_web2000',
        title:'@rad_web2000 | Twitter'
    },
    {
        color:'#0a66c2',
        icon:<RiLinkedinFill/>,
        path:'https://www.linkedin.com/in/rados%C5%82aw-adamczyk-853948195/',
        title:'Radosław Adamczyk | LinkedIn'
    },
    {
        color:'#D78D1D',
        icon:<BsMailbox/>,
        path:'mailto:radoslaw.adamczyk2000@gmail.com',
        title:'Radosław Adamczyk | LinkedIn'
    }
]