import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { rest } from 'msw'
import { expect } from '@storybook/jest'
import { SignIn } from './SignIn'

export default {
  title: 'Pages/Sign In',
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/signin', (req, res, ctx) => {
          return res(ctx.json({
            message: 'Sign in successfully'
          }))
        })
      ],
    },
  }
} as Meta

export const Default: StoryObj = {
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('type your email address'), 'teste@123.com')
    userEvent.type(canvas.getByPlaceholderText('type your pass'), 'shh123')
    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => {
      expect(canvas.getByText('User loged in!')).toBeInTheDocument()
    })
  }
}
