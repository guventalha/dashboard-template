export interface ITeam {
  id: number;
  name: string;
  href: string;
  initial: string;
  current: boolean;
}
export interface INavigation {
  name: string;
  href: string;
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
}
