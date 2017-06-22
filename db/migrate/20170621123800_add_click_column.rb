class AddClickColumn < ActiveRecord::Migration[4.2]
	def change
		add_column(:urls, :click, :integer)
	end
end
