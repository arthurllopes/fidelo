// ** Type import

import { VerticalNavItemsType } from "../../types"

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: 'mdi:home-outline',
      path: '/dashboard'
    },
    {
      sectionTitle: 'Leads'
    },
    {
      title: 'Clientes',
      icon: 'mdi:account-outline',
      children: [
        {
          title: 'Ver todos',
          path: '/apps/clients'
        },
        {
          title: 'Adicionar',
          path: '/apps/clients/add'
        },
      ]
    },
    {
      sectionTitle: 'Fidelo'
    },
    {
      title: 'Campanhas',
      icon: 'ic:outline-sell',
      children: [
        {
          title: 'Cupom',
          path: '/apps/campaings/cupom'
        },
        {
          title: 'Cupoencer',
          path: '/apps/campaings/cupoencer'
        },
        {
          title: 'CashBack',
          path: '/apps/campaings/cashback'
        },
        {
          title: 'Pontos',
          path: '/apps/campaings/points'
        },
        {
          title: 'Indicação',
          path: '/apps/campaings/indication'
        },
        {
          title: 'Clientes Prime',
          path: '/apps/campaings/prime'
        },

      ]
    },
    {
      sectionTitle: 'Financeiro'
    },
    {
      title: 'Vendas',
      icon: 'ic:outline-sell',
      children: [
        {
          title: 'Ver todas',
          path: '/apps/clients'
        },
        {
          title: 'Adicionar',
          path: '/finance/new-sell'
        },
      ]
    },
    {
      title: 'Premium - Financeiro',
      icon: 'carbon:finance',
      children: [
        {
          title: 'Dashboard',
          path: '/apps/finance'
        },
        {
          title: 'Contas a pagar',
          path: '/apps/finance/debit'
        },
        {
          title: 'Contas a receber',
          path: '/apps/finance/credit'
        },
      ]
    },
    {
      sectionTitle: 'Ações'
    },
    {
      title: 'Email',
      icon: 'mdi:email-outline',
      path: '/apps/email'
    },
    {
      title: 'Chat',
      icon: 'mdi:message-outline',
      path: '/apps/chat'
    },
    {
      title: 'Calendar',
      icon: 'mdi:calendar-blank-outline',
      path: '/apps/calendar'
    },
    {
      sectionTitle: 'Configurações'
    },
    {
      title: 'Perfil',
      icon: 'mdi:email-outline',
      path: '/apps/change'
    },
    {
      title: 'Usuários',
      icon: 'mdi:email-outline',
      path: '/apps/change'
    },
    {
      title: 'Desenvolvedor',
      icon: 'mdi:email-outline',
      path: '/apps/change'
    },
    {
      sectionTitle: 'Outros'
    },
    {
      title: 'Conteúdo',
      icon: 'mdi:email-outline',
      path: '/apps/change'
    },
    {
      title: 'Outros Serviços',
      icon: 'mdi:email-outline',
      path: '/apps/change'
    },
    {
      title: 'Ajuda',
      icon: 'mdi:email-outline',
      path: '/apps/change'
    },
  ]
}

export default navigation
