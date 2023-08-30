import { useState } from 'react'

import { useNavigate } from "react-router-dom";
import { useRecoilState } from 'recoil'
import { EXECUTE_PAY } from '../../graphql/payment'
import { graphqlFetcher } from '../../queryClient'

import PaymentModal from './modal'
import { useMutation } from '@tanstack/react-query'
import { checkedCartState } from '../../recoil/cart'
import WillPay from '../willPay';

type PayInfo = {
  id: string
  amount: number
}
type PaymentInfos = PayInfo[]

const Payment = () => {
  const navigate = useNavigate()
  const [checkedCartData, setCheckedCartData] = useRecoilState(checkedCartState)
  const [modalShown, toggleModal] = useState(false)
  const { mutate: executePay } = useMutation((payInfos: PaymentInfos) =>
    graphqlFetcher(EXECUTE_PAY, payInfos),
  )

  const showModal = () => {
    toggleModal(true)
  }

  const proceed = () => {
    const payInfos = checkedCartData.map(({ id, amount }) => ({ id, amount }))
    executePay(payInfos)
    setCheckedCartData([])

    // navigate('/products', { replace: true })
  }

  const cancel = () => {
    toggleModal(false)
  }

  return (
    <div>
      <WillPay submitTitle="결제하기" handleSubmit={showModal} />
      <PaymentModal show={modalShown} proceed={proceed} cancel={cancel} />
    </div>
  )
}

export default Payment