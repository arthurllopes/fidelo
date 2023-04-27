import Link from 'next/link'
import React from 'react'

const CupomDashboard = () => {
  return (
    <div>
        <div className="">
            <div>Meus cupons</div>
            <div>cupons</div>
        </div>
        <div className="">
            <div>Total em cupons distribuidos</div>
            <div>cupons</div>
        </div>
        <div className="">
            <div>Valor recebido</div>
            <div>cupons</div>
        </div>
        <Link  href='cupom/create'>Criar cupom</Link>
    </div>
  )
}

export default CupomDashboard