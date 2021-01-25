import { INavData } from './Models/navItem.model';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Contractor',
    role: 'contractor',
  },
  {
    name: 'Dashboard',
    url: '/contractor/dashboard',
    icon: 'icon-speedometer',
    role: 'contractor',
  },
  {
    name: 'Profile',
    url: '/contractor/company',
    icon: 'icon-briefcase',
    role: 'contractor',
    children: [
      {
        name: 'View Profile',
        url: '/contractor/company',
        icon: 'icon-briefcase'
      },
      {
        name: 'Edit Profile',
        url: '/contractor/company/edit-profile',
        icon: 'icon-briefcase'
      },
      {
        name: 'Projects',
        url: '/contractor/company/projects',
        icon: 'icon-briefcase'
      },
      {
        name: 'Equipment',
        url: '/contractor/company/equipments',
        icon: 'icon-briefcase'
      },
      {
        name: 'Documents',
        url: '/contractor/documents',
        icon: 'icon-notebook',
        role: 'contractor',
        children: [
          {
            name: 'All Documents',
            url: '/contractor/documents',
            icon: 'icon-notebook'
          },
          {
            name: 'CAC',
            url: '/contractor/documents/cac',
            icon: 'icon-notebook'
          },
          {
            name: 'Tax Clearance',
            url: '/contractor/documents/tax',
            icon: 'icon-notebook'
          },
          {
            name: 'PenComm',
            url: '/contractor/documents/pencomm',
            icon: 'icon-notebook'
          },
          {
            name: 'NSITF',
            url: '/contractor/documents/nsitf',
            icon: 'icon-notebook'
          },
          {
            name: 'ITF',
            url: '/contractor/documents/itf',
            icon: 'icon-notebook'
          },
          {
            name: 'IRR',
            url: '/contractor/documents/irr',
            icon: 'icon-notebook'
          },
          {
            name: 'Audited Account',
            url: '/contractor/documents/audit',
            icon: 'icon-calculator',
          },
        ]
      },
    ]
  },
  {
    name: 'Key Staff',
    url: '/contractor/staff',
    icon: 'icon-people',
    role: 'contractor',
  },
  {
    name: 'Procurements',
    url: '/contractor/procurement',
    icon: 'fa fa-paper-plane',
    role: 'contractor',
    children: [
      {
        name: 'View Procurements',
        url: '/contractor/procurement',
        icon: 'fa fa-paper-plane'
      },
      {
        name: 'Affidavit',
        url: '/contractor/procurement/document/affidavit',
        icon: 'fa fa-paper-plane',
      },
      {
        name: 'Bank Referral',
        url: '/contractor/procurement/document/bank-refferal',
        icon: 'fa fa-paper-plane',
      },
      {
        name: 'Tender History',
        url: '/contractor/procurement/tender-history',
        icon: 'fa fa-paper-plane'
      }
    ]
  },
  {
    name: 'Billing',
    url: '/billing',
    icon: 'icon-credit-card',
    role: 'contractor',
    children: [
      {
        name: 'Payments',
        url: '/billing',
        icon: 'icon-credit-card',
      },
      {
        name: 'Subscription',
        url: '/billing/subscription',
        icon: 'icon-credit-card',
      },
    ]
  },
  {
    title: true,
    name: 'ADMINISTRATOR',
    role: 'admin',
  },
  {
    name: 'Tender',
    url: '/admin/tender',
    icon: 'fa fa-paper-plane',
    role: 'admin',
  },
  {
    name: 'Applications',
    url: '/admin/applications',
    icon: 'fa fa-rocket',
    role: 'admin',
  },
  {
    name: 'Accounts',
    url: '/admin/accounts',
    icon: 'icon-people',
    role: 'admin',
  },
  {
    name: 'Contractors',
    url: '/admin/contractors',
    icon: 'icon-briefcase',
    role: 'admin',
  },
  {
    name: 'MDAs',
    url: '/admin/mdas',
    icon: 'icon-people',
    role: 'admin',
  },
  {
    name: 'Artisans',
    url: '/admin/artisans',
    icon: 'fa fa-address-card',
    role: 'admin',
  },
  {
    name: 'Suppliers',
    url: '/admin/suppliers',
    icon: 'fa fa-address-card-o',
    role: 'admin',
  },
  {
    name: 'Subscription',
    url: '/admin/subscription',
    icon: 'icon-credit-card',
    role: 'admin',
  },
  {
    title: true,
    name: 'ARTISAN',
    role: 'artisan',
  },
  {
    name: 'Artisan Dashboard',
    url: '/artisan',
    icon: 'icon-speedometer',
    role: 'artisan',
  },
  {
    name: 'Qualification',
    url: '/artisan/qualification',
    icon: 'icon-people',
    role: 'artisan',
  },
  {
    name: 'Projects',
    url: '/artisan/project',
    icon: 'icon-briefcase',
    role: 'artisan',
  },
  {
    name: 'Trade',
    url: '/artisan/trade',
    icon: 'icon-credit-card',
    role: 'artisan',
  },
  {
    name: 'Clients',
    url: '/artisan/clients',
    icon: 'icon-briefcase',
    role: 'artisan',
  },
  {
    name: 'Billing',
    url: '/billing',
    icon: 'icon-credit-card',
    role: 'artisan',
    children: [
      {
        name: 'Payments',
        url: '/billing',
        icon: 'icon-credit-card',
      },
      {
        name: 'Subscription',
        url: '/billing/subscription',
        icon: 'icon-credit-card',
      },
    ]
  },
  {
    name: 'Referees',
    url: '/artisan/referee',
    icon: 'icon-briefcase',
    role: 'artisan',
  },
  {
    title: true,
    name: 'Expert',
    role: 'expert',
  },
  {
    name: 'Expert Dashboard',
    url: '/expert',
    icon: 'icon-speedometer',
    role: 'expert',
  },
  {
    name: 'Qualification',
    url: '/expert/qualification',
    icon: 'icon-people',
    role: 'expert',
  },
  {
    name: 'Experience',
    url: '/expert/experience',
    icon: 'icon-briefcase',
    role: 'expert',
  },
  {
    name: 'Skill',
    url: '/expert/skill',
    icon: 'icon-people',
    role: 'expert',
  },
  {
    name: 'Clients',
    url: '/expert/clients',
    icon: 'icon-briefcase',
    role: 'expert',
  },
  {
    name: 'Billing',
    url: '/billing',
    icon: 'icon-credit-card',
    role: 'expert',
    children: [
      {
        name: 'Payments',
        url: '/billing',
        icon: 'icon-credit-card',
      },
      {
        name: 'Subscription',
        url: '/billing/subscription',
        icon: 'icon-credit-card',
      },
    ]
  },
  {
    name: 'Referees',
    url: '/expert/referee',
    icon: 'icon-briefcase',
    role: 'expert',
  },
  {
    title: true,
    name: 'MDA',
    role: 'mda',
  },
  {
    name: 'Tender',
    url: '/mda/tender',
    icon: 'fa fa-paper-plane',
    role: 'mda',
  },
  {
    name: 'Profile',
    url: '/mda/profile',
    icon: 'fa fa-user',
    role: 'mda',
  },
  {
    name: 'Applications',
    url: '/mda/applications',
    icon: 'fa fa-rocket',
    role: 'mda',
  },
  {
    title: true,
    name: 'SUPPLIER',
    role: 'supplier',
  },
  {
    name: 'Products',
    url: '/supplier',
    icon: 'fa fa-paper-plane',
    role: 'supplier',
  },
  {
    name: 'Billing',
    url: '/billing',
    icon: 'icon-credit-card',
    role: 'supplier',
    children: [
      {
        name: 'Payments',
        url: '/billing',
        icon: 'icon-credit-card',
      },
      {
        name: 'Subscription',
        url: '/billing/subscription',
        icon: 'icon-credit-card',
      },
    ]
  },
   {
    name: 'Profile',
    url: '/supplier/profile',
    icon: 'fa fa-user',
    role: 'supplier',
  },
];
