class AddClickColumn < ActiveRecord::Migration
	def change
		add_column(:urls, :click, :integer)
	end
end
