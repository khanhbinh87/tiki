import { Button, Divider, Form, Input ,message,notification} from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { loginApi } from '../../services/api'
import { useState } from 'react'

const LoginPage = () => {
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const onFinish = async (values) => {
        const { username, password } = values
        setLoading(true)
        const res = await loginApi(username, password)
        setLoading(false)
        if (res?.data?.user) {
            message.success('Login success')
            navigate('/')
        } else {
            notification.error({
                message: 'Có lỗi xảy ra',
                description:
                    res.message && Array.isArray(res.message)
                        ? res.message[0]
                        : res.message,
                duration: 5,
            })
        }
    }

    return (
        <div>
            <h3 style={{ textAlign: 'center' }}>Đăng nhập</h3>

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
                    label='Email'
                    name='username'
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
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type='primary' htmlType='submit' loading={loading}>
                        Login
                    </Button>
                </Form.Item>

                <Divider />
                <span>Chưa có tài khoản ? </span>
                <Link to='/register '>Đăng ký</Link>
            </Form>
        </div>
    )
}
export default LoginPage
