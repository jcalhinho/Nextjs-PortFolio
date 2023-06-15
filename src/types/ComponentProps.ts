import type { MouseEventHandler, ReactNode, RefObject } from "react";
import type { SectionType, TSocialsType, TTheme, T_Techs } from "./index";

export interface IPageWrapperProps {
  children?: ReactNode;
  Theme?: TTheme;
  ChangeTheme: Function;
  animated?: boolean;
  socials?: Array<TSocialsType>;
}

export interface ISectionWrapperProps {
  id?: string;
  children?: ReactNode;
}

export interface IServiceCardProps {
  title: string;
  icon: string;
  i: number;
  click: Function;
}

export interface IInitialPartProps {
  Head?: string;
  SubHead?: string;
  MoreDetails?: string;
}

export interface NavbarProps {
  Theme?: TTheme;
  ChangeTheme?: Function;
}

export interface FooterProps extends Omit<NavbarProps, "ChangeTheme"> {
  socials?: Array<TSocialsType>;
}

export interface IAboutSectionProps {
  Text?: string;
  Services?: any[];
}

export interface ExperienceCardProps {
  title?: string;
  company_name: string;
  icon: string;
  iconBg?: string;
  date?: string;
  points: Array<string>;
  theme: TTheme;
}

export interface ExperienceSectionProps {
  experience?: Array<Omit<ExperienceCardProps, "theme">>;
  theme?: TTheme;
}

export interface IHeroSectionProps {
  socials?: Array<TSocialsType>;
  cv?: string;
}

export interface IHomeProps {
  aboutCards: Array<Omit<IServiceCardProps, "i" | "onClick">>;
  experiences: Array<Omit<ExperienceCardProps, "theme">>;
  aboutText: string;
  initialSocials: Array<TSocialsType>;
  allSocials: Array<TSocialsType>;
  techs: Array<{ title: Array<string>; techs: Array<T_Techs> }>;
  cv?: string;
  projects?: Array<any>;
}

export interface ITechPieceProps {
  titles?: Array<string>;
  techs?: Array<T_Techs>;
  index?: number;
  dir?: "R" | "L";
}

export interface ITechSectionProps {
  techs?: Array<Omit<ITechPieceProps, "index" | "dir">>;
}

export interface ITechCardsProps extends Omit<IServiceCardProps, "i" | "click"> {
  experience?: string;
}

export interface ISetIconProps {
  icon?: string;
  size?: number;
  className?: string;
}

export interface IGenericIconSvg {
  size?: number;
  className?: string;
}

export interface IProjectsSectionProps {
  projects?: Array<any>;
}

export interface IFloatingMenuProps {
  sections?: Array<SectionType>;
}

export interface ITagProp {
  color?: "BLUE" | "GREEN" | "ORANGE" | "RED" | "GRAY" | "PINK";
  icon?: string;
  children?: ReactNode;
  upper?: boolean;
  cn?: string;
  name?: string;
}

export interface IProjectsCardProps {
  name: string;
  description: string;
  tags: Array<ITagProp>;
  image: string;
  source_code_link: string;
  index: number;
}

export interface ModalProps {
  dialogRef: RefObject<HTMLDialogElement>;
  close?: MouseEventHandler<HTMLButtonElement>;
  accept?: MouseEventHandler<HTMLButtonElement>;
}
