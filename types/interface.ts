import { ReactElement } from 'react';
export interface IntHero extends IntHeroContent, IntHeroPoster {
    socials:IntSocial[];
}
export interface IntHeroButtons {
    path:string;
    title:string;
}
export interface IntHeroContent {
    buttons:IntHeroButtons[];
    content:string;
    title:string;
}
export interface IntHeroPoster {
    image:string;
    title:string;
}
export interface IntProjects extends IntProjectContent {
    button:string;
    cards:IntProjectCard[];
}
export interface IntProjectCard extends IntProjectContent{
    button?:string;
    image:string;
    path:string;
    stack:ReactElement[];
}
export interface IntProjectContent {
    content:string;
    title:string;
}
export interface IntSeo{
    canonical?:string;
    description:string;
    image:string;
    robots?:string;
    title:string;
    typePage?:string;
}
export interface IntSkills extends IntProjectContent {
    skills:IntSkillsItem[];
}
export interface IntSkillsItem {
    icon:ReactElement;
    value:number;
}
export interface IntSocial extends IntSocialColor {
    icon:ReactElement;
    path:string;
}
export interface IntSocialColor {
    color:string;
}
export interface IntTimeline {
    title:string;
}
export interface IntTimelineCard extends IntTimeline{
    content:string;
    date:string;
    title:string;
}