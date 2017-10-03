class Api::V1::CitiesController < Api::V1::BaseController
  def index
    respond_with City.all
  end

  def create
    respond_with :api, :v1, City.create(item_params)
  end

  def destroy
    respond_with City.destroy(params[:id])
  end

  def update
    city = City.find(params["id"])
    city.update_attributes(item_params)
    respond_with city, json: city
  end

  private

  def item_params
    params.require(:city).permit(:id, :name, :description, :data)
  end
end
