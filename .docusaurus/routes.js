import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '61e'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/erika',
    component: ComponentCreator('/blog/authors/erika', '6a4'),
    exact: true
  },
  {
    path: '/blog/authors/marcos',
    component: ComponentCreator('/blog/authors/marcos', '9a1'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/fleet',
    component: ComponentCreator('/blog/tags/fleet', '98a'),
    exact: true
  },
  {
    path: '/blog/tags/token',
    component: ComponentCreator('/blog/tags/token', '561'),
    exact: true
  },
  {
    path: '/blog/tags/welcome',
    component: ComponentCreator('/blog/tags/welcome', 'aa2'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '9b2'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '32a'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'aef'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '133'),
            routes: [
              {
                path: '/category/financial-transparency',
                component: ComponentCreator('/category/financial-transparency', '07d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/how-it-works',
                component: ComponentCreator('/category/how-it-works', '13e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/legal-and-disclaimer',
                component: ComponentCreator('/category/legal-and-disclaimer', '2e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/security-and-compliances',
                component: ComponentCreator('/category/security-and-compliances', '051'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/team-and-partners',
                component: ComponentCreator('/category/team-and-partners', 'eda'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/contact_us',
                component: ComponentCreator('/contact_us', '230'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faq',
                component: ComponentCreator('/faq', 'a3b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/financial_transparency/cost_breakdown',
                component: ComponentCreator('/financial_transparency/cost_breakdown', 'c2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/financial_transparency/financial_projections',
                component: ComponentCreator('/financial_transparency/financial_projections', 'c94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/financial_transparency/how_we_manage_our_cars',
                component: ComponentCreator('/financial_transparency/how_we_manage_our_cars', 'd82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/financial_transparency/revenue_stream',
                component: ComponentCreator('/financial_transparency/revenue_stream', '87b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/how_it_works/exit_strategy',
                component: ComponentCreator('/how_it_works/exit_strategy', '5a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/how_it_works/investor_rewards',
                component: ComponentCreator('/how_it_works/investor_rewards', '3ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/how_it_works/overview',
                component: ComponentCreator('/how_it_works/overview', '219'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/how_it_works/rental_operations',
                component: ComponentCreator('/how_it_works/rental_operations', 'e96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/legal/investment_risks',
                component: ComponentCreator('/legal/investment_risks', '011'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/legal/privacy_policy',
                component: ComponentCreator('/legal/privacy_policy', 'f9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/legal/terms_of_services',
                component: ComponentCreator('/legal/terms_of_services', 'fb1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/roadmap',
                component: ComponentCreator('/roadmap', '8cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/security_and_compliances/regulations',
                component: ComponentCreator('/security_and_compliances/regulations', '139'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/security_and_compliances/smart_contracts',
                component: ComponentCreator('/security_and_compliances/smart_contracts', '9cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/selection_process',
                component: ComponentCreator('/selection_process', '603'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/team_and_partners/members',
                component: ComponentCreator('/team_and_partners/members', '1a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/team_and_partners/partners',
                component: ComponentCreator('/team_and_partners/partners', 'ab3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'fc9'),
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
