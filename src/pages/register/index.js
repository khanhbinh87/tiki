import { Button, Checkbox, Divider, Form, Input } from 'antd'

const onFinish = (values) => {
    console.log('Success:', values)
}

const Register = () => {
    return (
        <div>
            <h3 style={{textAlign:'center'}}>Đăng ký người dùng mới</h3>
            <Divider />
            <Form
                name='register'
                labelCol={{
                    span: 5,
                }}
                wrapperCol={{
                    span: 19,
                }}
                style={{
                    maxWidth: '600px',
                    margin:'0 auto'
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                
                autoComplete='off'
            >
                <Form.Item
                    label='Full Name'
                    name='fullname'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your fullname!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label='Email'
                    name='email'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label='Password'
                    name='password'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label='Phone'
                    name='phone'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type='primary' htmlType='submit'>
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default Register
