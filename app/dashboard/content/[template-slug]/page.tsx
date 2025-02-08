"use client"
import React, { useState } from 'react'
import FormSection from '../../_components/FormSection'
import OutputSection from '../../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { chatSession } from '@/utils/AiModal'

interface PROPS {
    params: Promise<{
        'template-slug': string
    }>
}

const NewContent = (props: PROPS) => {
    const params = React.use(props.params)

    const [loading, setLoading] = useState(false)
    const [aiOutput, setAiOutput] = useState<string>('')

    const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug == params['template-slug'])

    const generateAIContent = async (formData: any) => {

        setLoading(true)

        const selectedPrompt = selectedTemplate?.aiPrompt

        const finalAIPrompt = JSON.stringify(formData) + ", " + selectedPrompt

        const result = await chatSession.sendMessage(finalAIPrompt)

        setAiOutput(result?.response.text())

        setLoading(false)
    }

    return (
        <div className='p-5'>
            
            <Button><ArrowLeft /><Link href={"/dashboard"}>Quay lại</Link></Button>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {/* Form Section */}
                <FormSection
                    selectedTemplate={selectedTemplate}
                    userFormInput={(v:any) => generateAIContent(v)}
                    loading={loading}
                />
                {/* Output Section */}
                <div className='col-span-2'>
                    <OutputSection aiOutput={aiOutput}/>
                </div>
            </div>
        </div>
    )
}

export default NewContent