import React from 'react'
import { Story, Meta } from '@storybook/react'
import DiscordMessage, { DiscordMessageProps } from './DiscordMessage'
import DiscordMessages from './DiscordMessages'

export default {
	title: 'DiscordMessage',
	component: DiscordMessage,
	argTypes: {
		roleColor: {
			control: 'color',
			defaultValue: '',
		},
	},
} as Meta

const Template: Story<DiscordMessageProps> = args => (
	<DiscordMessages>
		<DiscordMessage {...args}>Hello World</DiscordMessage>
	</DiscordMessages>
)

export const Default = Template.bind({})

export const Author = Template.bind({})
Author.args = {
	author: 'Author',
}

export const Bot = Template.bind({})
Bot.args = {
	bot: true,
}

export const RoleColor = Template.bind({})
RoleColor.args = {
	roleColor: '#0099ff',
}
