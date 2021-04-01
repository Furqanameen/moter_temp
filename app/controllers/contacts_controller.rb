class ContactsController < ApplicationController
	before_action :set_contact, only:[:show, :edit, :update, :destroy ]
	def index
		@contact = Contact.all
	end
	def new
			@contact = Contact.new
	end
	def show
		# binding.pry
		
	end
	def create
		# binding.pry
	    @contact = Contact.new(contact_params)
		@contact.save
		redirect_to @contact
	end
	def edit
		
	end
	def update
		
		@contact.update(contact_params)
		redirect_to @contact
	end

	def destroy
		
		@contact.destroy
		redirect_to @contact
	end
	private
	  def set_contact
	  	@contact = Contact.find(params[:id])
	end
	def contact_params
		params.require(:contact).permit(:email,:address,:working_hours)
	end
end

