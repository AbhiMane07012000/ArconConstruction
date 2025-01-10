import React from 'react'

const RefundAndCancellation = () => {
  return (
    <div className="flex flex-col gap-10 md:h-full lg:h-[70vh] px-4 pt-20 lg:pt-20 lg:px-40 ">
        <div>
        <h3 className="text-2xl font-medium">Refund Policy</h3>
        <ul className="list-disc pl-10 py-2 space-y-1">
            <li>All Payments made via our website or payment gateways are <strong>non-refundable</strong>.</li>
            <li>Once a Payment is made, it will be allocated directly to support our construction projects, infrastructure development.</li>
            <li>In the case of in-kind contributions, such as materials or equipment, these will be distributed and utilized for the intended beneficiaries or projects.</li>
        </ul>
        </div>

        <div>
        <h3 className="text-2xl font-medium">Cancellation Policy</h3>
        <ul className="list-disc pl-10 py-2 space-y-1">
            <li>payments cannot be canceled once processed.</li>
            <li>Any requests for cancellation, whether for financial contributions or material support, will not be entertained under any circumstances.</li>
        </ul>
        </div>
    </div>
  )
}

export default RefundAndCancellation