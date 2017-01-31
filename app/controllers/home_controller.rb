class HomeController < ApplicationController
  def index
  end

  def data
    tasks = Task.all
    links = Link.all

    render :json=>{
              :data => tasks.map{|task|{
                          :id => task.id,
                          :text => task.text,
                          :start_date => task.start_date.to_formatted_s(:db),
                          :duration => task.duration,
                          :progress => task.progress,
                          :sortorder => task.sortorder,
                          :parent => task.parent
                      }},
              :links => links.map{|link|{
                  :id => link.id,
                  :source => link.source,
                  :target => link.target,
                  :type => link.link_type
              }}
           }
  end
end
