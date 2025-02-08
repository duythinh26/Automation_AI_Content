"use client"
import React, { useRef, useEffect } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface props {
    aiOutput: string
}

const OutputSection = ({aiOutput}: props) => {

    const editorRef: any = useRef(null);

    useEffect(() => {
        console.log(aiOutput)
        const editorInstance = editorRef.current.getInstance()
        editorInstance.setMarkdown(aiOutput)
    }, [aiOutput])
    

    return (
        <div className='bg-white shadow-lg border rounded-lg'>
            <div className='flex justify-between items-center p-5'>
                <h2>Kết quả trả về:</h2>
                <Button><Copy/>Sao chép</Button>
            </div>
            <Editor
                ref={editorRef}
                initialValue="Kết quả trả về sẽ nằm ở đây"
                initialEditType="wysiwyg"
                height="600px"
                useCommandShortcut={true}
                onChange={() => console.log(editorRef.current.getInstance().getMarkdown())}
            />
        </div>
    )
}

export default OutputSection