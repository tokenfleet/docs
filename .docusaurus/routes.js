import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/es/blog',
    component: ComponentCreator('/es/blog', 'f22'),
    exact: true
  },
  {
    path: '/es/blog/archive',
    component: ComponentCreator('/es/blog/archive', 'c1d'),
    exact: true
  },
  {
    path: '/es/blog/authors',
    component: ComponentCreator('/es/blog/authors', 'e39'),
    exact: true
  },
  {
    path: '/es/blog/authors/erika',
    component: ComponentCreator('/es/blog/authors/erika', 'e55'),
    exact: true
  },
  {
    path: '/es/blog/authors/marcos',
    component: ComponentCreator('/es/blog/authors/marcos', '001'),
    exact: true
  },
  {
    path: '/es/blog/tags',
    component: ComponentCreator('/es/blog/tags', 'b1d'),
    exact: true
  },
  {
    path: '/es/blog/tags/fleet',
    component: ComponentCreator('/es/blog/tags/fleet', 'f9c'),
    exact: true
  },
  {
    path: '/es/blog/tags/token',
    component: ComponentCreator('/es/blog/tags/token', '44e'),
    exact: true
  },
  {
    path: '/es/blog/tags/welcome',
    component: ComponentCreator('/es/blog/tags/welcome', 'f9c'),
    exact: true
  },
  {
    path: '/es/blog/welcome',
    component: ComponentCreator('/es/blog/welcome', '150'),
    exact: true
  },
  {
    path: '/es/markdown-page',
    component: ComponentCreator('/es/markdown-page', '724'),
    exact: true
  },
  {
    path: '/es/',
    component: ComponentCreator('/es/', '962'),
    routes: [
      {
        path: '/es/',
        component: ComponentCreator('/es/', 'd71'),
        routes: [
          {
            path: '/es/',
            component: ComponentCreator('/es/', 'c81'),
            routes: [
              {
                path: '/es/category/financial-transparency',
                component: ComponentCreator('/es/category/financial-transparency', '360'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/category/how-it-works',
                component: ComponentCreator('/es/category/how-it-works', 'f7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/category/legal-and-disclaimer',
                component: ComponentCreator('/es/category/legal-and-disclaimer', 'a5f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/category/security-and-compliances',
                component: ComponentCreator('/es/category/security-and-compliances', 'b51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/category/team-and-partners',
                component: ComponentCreator('/es/category/team-and-partners', 'f46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/contact_us',
                component: ComponentCreator('/es/contact_us', '529'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/faq',
                component: ComponentCreator('/es/faq', '7a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/financial_transparency/cost_breakdown',
                component: ComponentCreator('/es/financial_transparency/cost_breakdown', 'e21'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/financial_transparency/financial_projections',
                component: ComponentCreator('/es/financial_transparency/financial_projections', '2be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/financial_transparency/how_we_manage_our_cars',
                component: ComponentCreator('/es/financial_transparency/how_we_manage_our_cars', 'fd9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/financial_transparency/revenue_stream',
                component: ComponentCreator('/es/financial_transparency/revenue_stream', '699'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/how_it_works/exit_strategy',
                component: ComponentCreator('/es/how_it_works/exit_strategy', 'b09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/how_it_works/investor_rewards',
                component: ComponentCreator('/es/how_it_works/investor_rewards', 'fb1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/how_it_works/overview',
                component: ComponentCreator('/es/how_it_works/overview', '64f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/how_it_works/rental_operations',
                component: ComponentCreator('/es/how_it_works/rental_operations', '681'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/legal/investment_risks',
                component: ComponentCreator('/es/legal/investment_risks', 'b37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/legal/privacy_policy',
                component: ComponentCreator('/es/legal/privacy_policy', '00d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/legal/terms_of_services',
                component: ComponentCreator('/es/legal/terms_of_services', '55c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/roadmap',
                component: ComponentCreator('/es/roadmap', '2c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/security_and_compliances/regulations',
                component: ComponentCreator('/es/security_and_compliances/regulations', '37a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/security_and_compliances/smart_contracts',
                component: ComponentCreator('/es/security_and_compliances/smart_contracts', '6e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/selection_process',
                component: ComponentCreator('/es/selection_process', '123'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/team_and_partners/members',
                component: ComponentCreator('/es/team_and_partners/members', 'f32'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/team_and_partners/partners',
                component: ComponentCreator('/es/team_and_partners/partners', '4a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/',
                component: ComponentCreator('/es/', 'b15'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
