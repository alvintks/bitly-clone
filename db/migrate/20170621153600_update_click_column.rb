class UpdateClickColumn < ActiveRecord::Migration[4.2]
	def change
		change_column(:urls, :click, :integer, :default => 0)
	end
end
