export default [
    {
        name: "Viết bài viết",
        desc: "Viết một bài viết có liên quan đến từ khóa bạn đã nhập",
        category: "Bài viết",
        icon: '',
        aiPrompt: "Viết cho tôi một bài viết phù hợp dựa trên chủ đề được cung cấp và phác thảo ở định dạng trình soạn thảo văn bản phong phú với các đoạn văn ",
        slug: "blog-writing",
        form: [
            {
                label: "Nhập tiêu đề bài viết",
                field: "input",
                name: "title",
                required: true
            },
            {
                label: "Nhập dàn ý cho bài viết (tùy chọn)",
                field: "textarea",
                name: "outline"
            }
        ]
    },
]