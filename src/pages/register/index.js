import { Button, Divider, Form, Input, message, notification } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { registerApi } from '../../services/api'

const Register = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const onFinish = async (values) => {
        const { fullName, email, password, phone } = values
        setLoading(true)
        const res = await  registerApi(fullName, email, password, phone)
        
        setLoading(false)
        if(res?.data?._id){
           
            message.success('Register success')
            navigate('/login')
        }else{
            notification.error({
                message:'Có lỗi xảy ra',
                description:res.message && Array.isArray(res.message) ? res.message[0] : res.message,
                duration:5
            })
        }
    }

    return (
        <div>
            <h3 style={{ textAlign: 'center' }}>Đăng ký người dùng mới</h3>

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
                    margin: '0 auto',
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                autoComplete='off'
            >
                <Divider />
                <Form.Item
                    labelCol={{ span: 24 }}
                    label='Full Name'
                    name='fullName'
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
                    labelCol={{ span: 24 }}
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
                    labelCol={{ span: 24 }}
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
                    labelCol={{ span: 24 }}
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
                    <Button type='primary' htmlType='submit' loading={loading}>
                        Register
                    </Button>
                </Form.Item>

                <Divider />
                <span>Đã có tài khoản ? </span>
                <Link to='/login'>Đăng nhập</Link>
            </Form>
        </div>
    )
}

export default Register;