'use client'
import DisplayCampaigns from '#/components/DisplayCampaigns'
import { useStateContext } from '#/context'
import { useEffect, useState } from 'react'

export default function Page() {
	const [isLoading, setIsLoading] = useState(false)
	const [campaigns, setCampaigns] = useState([])

	const { address, contract, getCampaigns } = useStateContext()

	const fetchCampaigns = async () => {
		setIsLoading(true)
		const data = await getCampaigns()
		setCampaigns(data)
		setIsLoading(false)
	}

	useEffect(() => {
		if (contract) fetchCampaigns()
	}, [address, contract])

	return (
		<div className="flex flex-col items-center justify-center">
			<div className="flex justify-center py-20">
				<div className="m-5 rounded-md border-2 px-10 py-5 text-4xl font-bold">
					Browse Campaigns
				</div>
			</div>
			<DisplayCampaigns isLoading={isLoading} campaigns={campaigns} />
		</div>
	)
}
