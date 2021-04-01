class SlidersController < ApplicationController
	before_action :set_slider, only:[:show, :edit, :update, :destroy ]
	def index
		@slider = Slider.all
	end
	def new
		@slider = Slider.new
	end
	def create
		@slider = Slider.new(slider_params)
		@slider.save
		redirect_to sliders_path
	end
	def show

	end
	def edit
	end
	def update
		# binding.pry
		@slider.update(slider_params)
		redirect_to @slider
	end
	def destroy
		@slider.destroy
		redirect_to @slider
	end
	private
	def set_slider
		@slider = Slider.find(params[:id])
	end
	def slider_params
		params.require(:slider).permit(:title, :description, :image)
	end
end
