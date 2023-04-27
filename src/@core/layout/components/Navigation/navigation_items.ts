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
          title: 'Cupoencer',
          path: '/apps/campaings/cupoencer'
        },
        {
          title: 'Cupom',
          path: '/apps/campaings/cupom'
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
          path: '/apps/clients/add'
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
      path: '/apps/email'
    },
    {
      title: 'Usuários',
      icon: 'mdi:email-outline',
      path: '/apps/email'
    },
    {
      title: 'Desenvolvedor',
      icon: 'mdi:email-outline',
      path: '/apps/email'
    },
    {
      sectionTitle: 'Outros'
    },
    {
      title: 'Conteúdo',
      icon: 'mdi:email-outline',
      path: '/apps/email'
    },
    {
      title: 'Outros Serviços',
      icon: 'mdi:email-outline',
      path: '/apps/email'
    },
    {
      title: 'Ajuda',
      icon: 'mdi:email-outline',
      path: '/apps/email'
    },
  ]
}

export default navigation
