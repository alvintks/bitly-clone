class UpdateClickColumn < ActiveRecord::Migration
	def change
		change_column(:urls, :click, :integer, :default => 0)
	end
end
