class SocialsController < ApplicationController
	 before_action :set_social, only:[:show, :edit, :update, :destroy ]
def index
		@social = Social.all
	end
	def new
		@social = Social.new
	end
	def create
		@social = Social.new(social_params)
		@social.save
		redirect_to socials_path
	end
	def show
		
	end
	def edit
		
	end
	def update
		@social.update(social_params)
		redirect_to @social
	end
	def destroy
		@social.destroy
		redirect_to @social
	end
	private
	def set_social
		@social = Social.find(params[:id])
	end
	def social_params
		params.require(:social).permit(:facebook_links, :twitter_links, :google_links, :pinterest_links, :dribbble_links)
	end
	
end
